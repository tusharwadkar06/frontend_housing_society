import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Footer = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.container}>
     
      <TabButton
        label="Home"
        icon={
          <FontAwesome5
            name="home"
            size={20}
            color={activeTab === 'Home' ? '#fff' : '#555'}
          />
        }
        isActive={activeTab === 'Home'}
        onPress={() => onTabPress('Home')}
      />
      
      <TabButton
        label="Notice"
        icon={
          <MaterialIcons
            name="campaign"
            size={24}
            color={activeTab === 'Alert' ? '#fff' : '#555'}
          />
        }
        isActive={activeTab === 'Alert'}
        onPress={() => onTabPress('Alert')}
      />
      {/* Stats Tab */}
      <TabButton
        label="Stats"
        icon={
          <MaterialIcons
            name="bar-chart"
            size={24}
            color={activeTab === 'Stats' ? '#fff' : '#555'}
          />
        }
        isActive={activeTab === 'Stats'}
        onPress={() => onTabPress('Stats')}
      />
      {/* Users Tab */}
      <TabButton
        label="Users"
        icon={
          <Icon
            name="people-outline"
            size={24}
            color={activeTab === 'Users' ? '#fff' : '#555'}
          />
        }
        isActive={activeTab === 'Users'}
        onPress={() => onTabPress('Users')}
      />
      {/* More Tab */}
      <TabButton
        label="More"
        icon={
          <Icon
            name="ellipsis-horizontal"
            size={24}
            color={activeTab === 'More' ? '#fff' : '#555'}
          />
        }
        isActive={activeTab === 'More'}
        onPress={() => onTabPress('More')}
      />
    </View>
  );
};

// TabButton component for each tab
const TabButton = ({ icon, label, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isActive ? styles.activeTab : styles.tab}
    >
      {icon}
      {/* Show label only if tab is active */}
      {isActive && <Text style={styles.activeLabel}>{label}</Text>}
    </TouchableOpacity>
  );
};

// Styles for the footer and tabs
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  activeTab: {
    flexDirection: 'row',
    backgroundColor: '#2F80ED',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    gap: 6,
  },
  activeLabel: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 14,
  },
});

export default Footer;