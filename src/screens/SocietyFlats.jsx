import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';
import Footer from '../components/Footer';

const data = [
  { flat: 'A-101', status: 'Self Occupied', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
  { flat: 'A-102', status: 'Rented', residents: [{ name: 'Priyanka Gupta', type: 'Tenant', phone: '91+ 1234567899' }] },
  { flat: 'A-103', status: 'Vacant', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
  { flat: 'A-104', status: 'Self Occupied', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
  { flat: 'A-105', status: 'Self Occupied', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
  { flat: 'A-106', status: 'Rented', residents: [{ name: 'Priyanka Gupta', type: 'Tenant', phone: '91+ 1234567899' }] },
  { flat: 'B-101', status: 'Vacant', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
];

const SocietyFlats = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [filteredData, setFilteredData] = useState(data);

  return (
    <BackgroundLayout
      blueHeight={80}
      showHeader={true}
      headerTitle="Society Flats"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={true}
      searchData={data}
      onSearchResults={(results) => setFilteredData(results)} 
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {filteredData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('viewFlat', { flatData: item })}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.flat}>{item.flat}</Text>
              <View style={styles.iconRow}>
                <TouchableOpacity style={styles.iconWrapper}>
                  <Image source={require('../assets/societyflats/mail.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper}>
                  <Image source={require('../assets/societyflats/mail.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper}>
                  <Image source={require('../assets/societyflats/message.png')} style={styles.iconImage} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.status}>{item.status}</Text>
            {item.residents.map((r) => (
              <View key={r.name} style={styles.row}>
                <Text style={styles.name}>
                  {r.name} ({r.type})
                </Text>
                <Text style={styles.phone}>{r.phone}</Text>
              </View>
            ))}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer activeTab={activeTab} onTabPress={(tab) => setActiveTab(tab)} />
    </BackgroundLayout>
  );
};

export default SocietyFlats;

const styles = StyleSheet.create({
  scroll: {
    padding: 2,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    elevation: 1,
    width: '100%'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flat: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1E1E1E',
  },
  status: {
    marginTop: 4,
    fontSize: 13,
    color: '#777',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  name: {
    fontSize: 13,
    color: '#444',
  },
  phone: {
    fontSize: 13,
    color: '#777',
  },
  iconRow: {
    flexDirection: 'row',
    columnGap: 10,
  },
  iconWrapper: {
    width: 35,
    height: 35,
    borderRadius: 17,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
