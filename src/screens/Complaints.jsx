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
    updated: '18 Jun 2025',
    status: 'Open',
    user: 'Aditi and Shweta (Tenant)',
    flat: 'B-901',
  },
  {
    id: '#124569',
    title: 'Water Pipe Leakage',
    date: '21 July 2025',
    created: '17 Jun 2025',
    updated: '21 Jul 2025',
    status: 'Resolved',
    user: 'Aditi and Shweta (Tenant)',
    flat: 'B-901',
  },
  {
    id: '#124570',
    title: 'Water Pipe Leakage',
    date: '06 July 2025',
    created: '17 Jun 2025',
    updated: '17 Jun 2025',
    status: 'Open',
    user: 'Aditi and Shweta (Tenant)',
    flat: 'B-901',
  },
];

const Complaints = ({ navigation }) => {
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  return (
    <BackgroundLayout
      blueHeight={210}
      showHeader={true}
      headerTitle="Complaints"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={false}
    >
      <View style={styles.pageWrapper}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.newComplaintBtn}
            onPress={() => navigation.navigate('NewComplaintForm')}
          >
            <Text style={styles.newComplaintText}>+ New Complaints</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.statTitle}>Last 90 Days</Text>
        <View style={styles.statRow}>
          {['114 Total', '16 InProgress', '68 Open', '26 Closed'].map((stat, idx) => (
            <View key={idx} style={styles.statBox}>
              <Text style={styles.statNumber}>{stat.split(' ')[0]}</Text>
              <Text style={styles.statLabel}>{stat.split(' ')[1]}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Notices</Text>
          <TouchableOpacity onPress={() => console.log('View All Pressed')}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.list}>
          {dummyComplaints.map((item, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => setSelectedComplaint(item)}>
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
                  <Image source={require('../assets/images/human.png')} style={styles.userIcon} />
                  <View>
                    <Text style={styles.username}>{item.user}</Text>
                    <Text style={styles.time}>02 hrs ago</Text>
                  </View>
                </View>

                <Image source={require('../assets/images/plumber.jpg')} style={styles.thumbnail} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Fullscreen Complaint Modal */}
      <Modal visible={!!selectedComplaint} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.rowBetween}>
              <Text style={styles.statusLabel(selectedComplaint?.status)}>{selectedComplaint?.status}</Text>
              <Text style={styles.flatTag}>{selectedComplaint?.flat}</Text>
            </View>

            <Text style={styles.title}>{selectedComplaint?.title}</Text>
            <Text style={styles.id}>ID: {selectedComplaint?.id}</Text>

            <Image source={require('../assets/images/plumber.jpg')} style={styles.modalImage} />

            <Text style={styles.description}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a placeholder text.
            </Text>

            <View style={[styles.row, { marginTop: 10 }]}>
              <Image source={require('../assets/images/human.png')} style={styles.userIcon} />
              <View>
                <Text style={styles.username}>{selectedComplaint?.user}</Text>
                <Text style={styles.time}>02 hrs ago</Text>
              </View>
            </View>

            <Text style={styles.date}>Created: {selectedComplaint?.created}</Text>
            <Text style={styles.date}>Last Update: {selectedComplaint?.updated}</Text>

            {selectedComplaint?.status === 'Open' ? (
              <TouchableOpacity style={styles.assignButton}onPress={() => navigation.navigate('complaintsassign')}>
                <Text style={styles.assignText}>Assign</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.assignedBox}>
                <Text style={styles.assignedTo}>Suraj Chavan (Plumber)</Text>
                <Text style={styles.assignedTo}>+91 1234567899</Text>
              </View>
            )}

            <TouchableOpacity onPress={() => setSelectedComplaint(null)} style={styles.closeBtn}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </BackgroundLayout>
  );
};

export default Complaints;
const styles = StyleSheet.create({
  pageWrapper: { flex: 1 },
  buttonWrapper: { marginTop: -155, marginBottom: 16 },
  newComplaintBtn: {
    backgroundColor: '#0039A9',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  newComplaintText: { color: '#fff', fontWeight: '600' },
  statTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: 'white',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statBox: {
    backgroundColor: '#b5e4fe',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 83,
  },
  statNumber: { fontSize: 16, fontWeight: 'bold', color: '#0032ac' },
  statLabel: { fontSize: 12, color: '#0032ac' },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#222',
    marginLeft: 4,
  },
  viewAll: {
    fontSize: 13,
    color: '#0039A9',
    fontWeight: '600',
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
    marginBottom: 4,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  modalImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },
  assignButton: {
    marginTop: 12,
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  assignText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  assignedBox: {
    marginTop: 12,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 6,
  },
  assignedTo: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  closeBtn: {
    marginTop: 14,
    alignSelf: 'center',
  },
  closeText: {
    color: '#0039A9',
    fontWeight: '600',
  },
});
