
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({
  title,
  onBack,
  onNotification,
  showBadge = false,
  backgroundColor = 'transparent',
  searchData = [],
  onSearchResults = () => {}, 
}) => {
  const [searchMode, setSearchMode] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const lowerText = searchText.toLowerCase();

    if (searchMode && searchData.length > 0) {
      const filtered = searchData.filter((item) => {
        return Object.keys(item).some((key) => {
          const value = item[key];

          // If array (like residents or members)
          if (Array.isArray(value)) {
            return value.some((subItem) =>
              typeof subItem === 'object'
                ? Object.values(subItem).some(
                    (v) =>
                      typeof v === 'string' &&
                      v.toLowerCase().includes(lowerText)
                  )
                : typeof subItem === 'string' &&
                  subItem.toLowerCase().includes(lowerText)
            );
          }

          // If simple string value
          return (
            typeof value === 'string' &&
            value.toLowerCase().includes(lowerText)
          );
        });
      });

      onSearchResults(filtered);
    } else if (searchMode && searchText === '') {
      onSearchResults(searchData); // Reset to original if searchText is empty
    }
  }, [searchText, searchMode]);

  return (
    <View style={[styles.header, { backgroundColor }]}>
      <TouchableOpacity
        onPress={() => {
          if (searchMode) {
            setSearchMode(false);
            setSearchText('');
            onSearchResults(searchData);
          } else {
            onBack && onBack();
          }
        }}
        style={styles.leftIcon}
      >
        <Feather name="chevron-left" size={26} color="#fff" />
      </TouchableOpacity>

      {searchMode ? (
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="white"
            value={searchText}
            onChangeText={setSearchText}
            autoFocus
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons
                name="close"
                size={20}
                color="#fff"
                style={{ marginLeft: 6 }}
              />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.rightIcons}>
            <TouchableOpacity
              onPress={() => setSearchMode(true)}
              style={styles.iconWrapper}
            >
              <Ionicons name="search-outline" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onNotification}
              style={styles.iconWrapper}
            >
              <Ionicons name="notifications-outline" size={20} color="#fff" />
              {showBadge && <View style={styles.badge} />}
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  leftIcon: {
    padding: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginLeft: 8,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 8,
    marginLeft: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff20',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#fff',
    fontSize: 14,
  },
});

export default Header;
