import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';

const dummyComplaints = [
  {
    id: '#124568',
    title: 'Water Pipe Leakage',
    date: '06 July 2025',
    created: '17 Jun 2025',
    updated: '17 Jun 2025',
    status: 'Open',
    user: 'Aditya',
    flat: 'A-101',
    // image: require('../assets/images/pipe.png'),
  },
  {
    id: '#124569',
    title: 'AC Repairing Services',
    date: '06 July 2025',
    created: '17 Jun 2025',
    updated: '17 Jun 2025',
    status: 'Resolved',
    user: 'Aditya',
    flat: 'B-901',
    // image: require('../assets/images/ac.png'),
  },
  {
    id: '#124570',
    title: 'Electricity Wire Cut',
    date: '06 July 2025',
    created: '17 Jun 2025',
    updated: '17 Jun 2025',
    status: 'In Progress',
    user: 'Aditya',
    flat: 'C-804',
    // image: require('../assets/images/wire.png'),
  },
];

const Complaints = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <BackgroundLayout
      blueHeight={150}
      showHeader={true}
      headerTitle="Complaints"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={false}
    >
      {/* + New Complaints Button */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.newComplaintBtn}>
          <Text style={styles.newComplaintText}>+ New Complaints</Text>
        </TouchableOpacity>
      </View>

      {/* Statistics Row */}
      <View style={styles.statRow}>
        {['114 Total', '16 InProgress', '68 Open', '26 Closed'].map((stat, idx) => (
          <View key={idx} style={styles.statBox}>
            <Text style={styles.statNumber}>{stat.split(' ')[0]}</Text>
            <Text style={styles.statLabel}>{stat.split(' ')[1]}</Text>
          </View>
        ))}
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Recent Notices</Text>

      {/* Complaints List */}
      <ScrollView style={styles.list}>
        {dummyComplaints.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.statusLabel(item.status)}>{item.status}</Text>
              <Text style={styles.flatTag}>{item.flat}</Text>
            </View>

            <Text style={styles.id}>ID: {item.id}</Text>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.date}>
              Last Update: {item.updated}, Created: {item.created}
            </Text>

            <View style={styles.rowBetween}>
              <View style={styles.row}>
                <Image
                  // source={require('../assets/images/user.png')}
                  style={styles.userIcon}
                />
                <View>
                  <Text style={styles.username}>{item.user}</Text>
                  <Text style={styles.time}>02 hrs ago</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => setSelectedImage(item.image)}>
                <Image source={item.image} style={styles.thumbnail} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Full Screen Image Modal */}
      <Modal visible={!!selectedImage} transparent>
        <TouchableOpacity
          style={styles.fullscreenOverlay}
          onPress={() => setSelectedImage(null)}
        >
          <Image source={selectedImage} style={styles.fullscreenImage} />
        </TouchableOpacity>
      </Modal>
    </BackgroundLayout>
  );
};

export default Complaints;

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  newComplaintBtn: {
    backgroundColor: '#0039A9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  newComplaintText: {
    color: '#fff',
    fontWeight: '600',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    paddingHorizontal: 10,
  },
  statBox: {
    backgroundColor: '#EAF2FF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 60,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0039A9',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 16,
    color: '#222',
  },
  list: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusLabel: (status) => ({
    fontSize: 13,
    fontWeight: '600',
    color:
      status === 'Resolved'
        ? 'green'
        : status === 'Open'
        ? 'orange'
        : '#007BFF',
  }),
  flatTag: {
    backgroundColor: '#EAF2FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    color: '#0039A9',
  },
  id: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  userIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ccc',
  },
  username: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 11,
    color: '#999',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  fullscreenOverlay: {
    flex: 1,
    backgroundColor: '#000000cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
});
