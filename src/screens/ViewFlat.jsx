import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackgroundLayout from '../components/BackgroundLayout';
import Footer from '../components/Footer';

const ViewFlat = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = React.useState('Home');
  const { flatData } = route.params;

  const data = [
    {
      image: require('../assets/images/keys.gif'),
      label: `${flatData.residents.length} Owner`,
      onPress: () =>
        navigation.navigate('viewmembers', { members: flatData.residents }),
    },
    {
      image: require('../assets/images/teamwork.gif'),
      label: 'No Staff',
      onPress: () =>
        navigation.navigate('sttaf', { members: flatData.residents }),
    },
    {
      image: require('../assets/images/id-card.gif'),
      label: '2 Visitors Today',
      onPress: () =>
        navigation.navigate('visitors', { members: flatData.residents }),
    },
    {
      image: require('../assets/images/time.gif'),
      label: 'No Dues',
       onPress: () =>
        navigation.navigate('flatbills', { members: flatData.residents }),
    },
    {
      image: require('../assets/images/document.gif'),
      label: 'Document',
        onPress: () =>
        navigation.navigate('flatdocuments', { members: flatData.residents }),
    },
    {
      image: require('../assets/images/car.gif'),
      label: '3 Vehicles',
      onPress: () =>
        navigation.navigate('vehicles', { members: flatData.residents }),
    },
  
  ];

  const contactItems = [
    { image: require('../assets/societyflats/call.png'), color: '#1CB55C' },
    { image: require('../assets/societyflats/mail.png'), color: '#007AFF' },
    { image: require('../assets/societyflats/mail.png'), color: '#5856D6' },
    { image: require('../assets/societyflats/mail.png'), color: '#5856D6' },
    { image: require('../assets/societyflats/mail.png'), color: '#A2845E' },
  ];

  const [filteredData, setFilteredData] = React.useState(data);

  return (
    <BackgroundLayout
      blueHeight={80}
      showHeader={true}
      headerTitle="View Members"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={true}
      searchData={data}
      onSearchResults={(results) => setFilteredData(results)}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity
          style={styles.flatCard}
          onPress={() => navigation.navigate('BasicDetails', { flatData })}
        >
          <View>
            <Text style={styles.flatNumber}>{flatData.flat}</Text>
            <Text style={styles.occupancy}>{flatData.status}</Text>
          </View>
          <Icon name="create-outline" size={20} color="#666" />
        </TouchableOpacity>

        <View style={styles.grid}>
          {filteredData.map((item, idx) => {
            const Wrapper = item.onPress ? TouchableOpacity : View;
            return (
              <Wrapper
                key={idx}
                style={styles.card}
                onPress={item.onPress}
                activeOpacity={item.onPress ? 0.7 : 1}
              >
                <Image source={item.image} style={styles.iconImage} />
                <Text style={styles.cardText}>{item.label}</Text>
              </Wrapper>
            );
          })}
        </View>

      </ScrollView>

      <Footer activeTab={activeTab} onTabPress={(tab) => setActiveTab(tab)} />
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  content: { paddingBottom: 20 },
  flatCard: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  flatNumber: { fontSize: 22, fontWeight: '600', color: '#333' },
  occupancy: { fontSize: 14, color: '#888', marginTop: 4 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '49%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 7,
    alignItems: 'center',
    elevation: 1,
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  cardText: { textAlign: 'center', fontSize: 14, color: '#333' },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginVertical: 16,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactIconImage: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});

export default ViewFlat;



