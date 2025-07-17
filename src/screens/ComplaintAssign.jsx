import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackgroundLayout from '../components/BackgroundLayout';

const { width, height } = Dimensions.get('window');

// Static user data
const users = [
  {
    id: '1',
    name: 'Ahmed Sohel',
    dept: 'Electrical',
    image: require('../assets/images/human.png'),
  },
  {
    id: '2',
    name: 'Maria Gonzalez',
    dept: 'Mechanical',
    image: require('../assets/images/human.png'),
  },
  {
    id: '3',
    name: 'Liam Chen',
    dept: 'Software',
    image: require('../assets/images/human.png'),
  },
  {
    id: '4',
    name: 'James Smith',
    dept: 'Chemical',
    image: require('../assets/images/human.png'),
  },
  {
    id: '5',
    name: 'Olivia Brown',
    dept: 'Biomedical',
    image: require('../assets/images/human.png'),
  },
  {
    id: '6',
    name: 'Ethan Johnson',
    dept: 'Environmental',
    image: require('../assets/images/human.png'),
  },
  {
    id: '7',
    name: 'Sophia Davis',
    dept: 'Aerospace',
    image: require('../assets/images/human.png'),
  },
];

const ComplaintAssign = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <BackgroundLayout
        blueHeight={80}
        showHeader={true}
        headerTitle="Complaints"
        onBack={() => navigation.goBack()}
        onNotification={() => {}}
        showBadge={true}
      />

      {/* Complaint Info */}
      <View style={styles.complaintInfo}>
        <View style={styles.row}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Open</Text>
          <View style={styles.flatTag}>
            <Text style={styles.flatText}>B-901</Text>
          </View>
        </View>
        <Text style={styles.title}>Water Pipe Leakage</Text>
        <Text style={styles.id}>ID: #124568</Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchWrapper}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      {/* Users List */}
      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Image source={item.image} style={styles.userImage} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userDept}>{item.dept}</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="call" size={20} color="#007BFF" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ComplaintAssign;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F8FF',
  },
  complaintInfo: {
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.015,
    paddingBottom: height * 0.008,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.007,
  },
  
  statusText: {
    color: 'orange',
    fontWeight: '600',
    fontSize: width * 0.033,
  },
  flatTag: {
    backgroundColor: '#EAF2FF',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.004,
    borderRadius: 6,
    marginLeft: 10,
  },
  flatText: {
    fontSize: width * 0.03,
    color: '#0039A9',
    fontWeight: '500',
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#222',
    marginBottom: 2,
  },
  id: {
    fontSize: width * 0.032,
    color: '#666',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 12,
    marginVertical: height * 0.015,
    height: 40,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.035,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.03,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: width * 0.03,
    marginBottom: height * 0.012,
    elevation: 1,
  },
  userImage: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: width * 0.055,
    marginRight: 12,
    backgroundColor: '#ccc',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#222',
  },
  userDept: {
    fontSize: width * 0.032,
    color: '#888',
  },
});
