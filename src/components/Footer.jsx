import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Footer = ({ activeTab, onTabPress }) => {
  const navigation = useNavigation();

  const handlePress = (tabName) => {
    onTabPress(tabName);            // Update active tab in parent
    navigation.navigate(tabName);   // Navigate to corresponding screen
  };

  return (
    <View style={styles.container}>
      {/* Home Tab */}
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
        onPress={() => handlePress('Home')}
      />

      {/* Notice Tab */}
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
        onPress={() => handlePress('Alert')}
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
        onPress={() => handlePress('Stats')}
      />

      {/* Complaints Tab */}
      <TabButton
        label="Complaints"
        icon={
          <Icon
            name="alert-circle-outline"
            size={24}
            color={activeTab === 'complaints' ? '#fff' : '#555'}
          />
        }
        isActive={activeTab === 'complaints'}
        onPress={() => handlePress('complaints')}
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
        onPress={() => handlePress('More')}
      />
    </View>
  );
};

// Individual Tab Button
const TabButton = ({ icon, label, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isActive ? styles.activeTab : styles.tab}
    >
      {icon}
      {isActive && <Text style={styles.activeLabel}>{label}</Text>}
    </TouchableOpacity>
  );
};

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
