import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import BackgroundLayout from '../components/BackgroundLayout';
import Fab from '../components/Fab';

const MemberCard = ({ member }) => (
  <View style={styles.card}>
    <Image source={{ uri: member.image }} style={styles.avatar} />
    <View style={styles.flexOne}>
      <Text style={styles.name}>{member.name}</Text>
      <Text style={styles.phone}>{member.phone}</Text>
      <Text style={styles.email}>{member.email}</Text>
    </View>
    <View style={styles.icons}>
      <TouchableOpacity>
        <Image
          source={require('../assets/societyflats/call.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/societyflats/mail.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
    </View>
    <Text style={styles.role}>{member.role}</Text>
  </View>
);

const ViewMembers = ({ navigation }) => {
  const members = [
    {
      name: 'Naman Mathur',
      phone: '+91-98XXXXXX25',
      email: 'naman01@gmail.com',
      role: 'Owner',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      name: 'Rutuja Mathur',
      phone: '+91-98XXXXXX25',
      email: 'naman01@gmail.com',
      role: 'Wife',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'Shreya Mathur',
      phone: '+91-98XXXXXX25',
      email: 'naman01@gmail.com',
      role: 'Spouse',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  const [filteredData, setFilteredData] = React.useState(members);

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackgroundLayout
  blueHeight={80}
  showHeader={true}
  headerTitle="View Members"
  onBack={() => navigation.goBack()}
  onNotification={() => {}}
  showBadge={true}
  searchData={members} 
  onSearchResults={(results) => setFilteredData(results)}
>

        <ScrollView contentContainerStyle={styles.container}>
          {filteredData.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </ScrollView>

           <Fab onPress={() => navigation.navigate('AddMembers')} />

      </BackgroundLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 12,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 12,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 12,
  },
  flexOne: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  phone: {
    fontSize: 14,
    color: '#333',
  },
  email: {
    fontSize: 13,
    color: '#777',
  },
  icons: {
    flexDirection: 'row',
    marginHorizontal: 8,
    gap: 5,
  },
  iconImage: {
    width: 22,
    height: 22,
    marginVertical: 6,
  },
  role: {
    color: '#007aff',
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#f68c1f',
    padding: 14,
    borderRadius: 30,
    elevation: 5,
  },
});

export default ViewMembers;
