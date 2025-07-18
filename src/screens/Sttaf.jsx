
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackgroundLayout from '../components/BackgroundLayout';
import PopUp from '../components/PopUp';
import DeletePopUp from '../components/DeletePopUp';
import Calendar from '../components/Calender';
import Fab from '../components/Fab';

const { width } = Dimensions.get('window');

const Staff = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStaffList, setSelectedStaffList] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedStaffId, setSelectedStaffId] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const staffList = [
    { id: '1', name: 'Rani', role: 'Cooking', lastVisit: '2025-07-01 / 4:30 PM', image: require('../assets/icon/humanicon.png') },
    { id: '2', name: 'Aarav', role: 'Cooking', lastVisit: '2025-07-02 / 4:30 PM', image: require('../assets/icon/humanicon.png') },
    { id: '3', name: 'Meera', role: 'Consulting', lastVisit: '2025-06-30 / 4:30 PM', image: require('../assets/icon/humanicon.png') },
  ];

  const toggleStaffSelection = (item) => {
    const isAlreadySelected = selectedStaffList.some(s => s.id === item.id);
    if (!isAlreadySelected) {
      setSelectedStaffList(prev => [...prev, item]);
      setModalVisible(false);
    }
  };

  const removeStaff = (id) => {
    setSelectedStaffList(prev => prev.filter(s => s.id !== id));
    if (selectedProfile?.id === id) setSelectedProfile(null);
  };

  const filteredStaff = staffList.filter(staff =>
    staff.name.toLowerCase().includes(searchText.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchText.toLowerCase())
  );

  const confirmDelete = () => {
    removeStaff(selectedStaffId);
    setShowDeletePopup(false);
    setSelectedStaffId(null);
  };

  const openDeletePopup = (id) => {
    setSelectedStaffId(id);
    setShowDeletePopup(true);
  };

  const cancelDelete = () => {
    setSelectedStaffId(null);
    setShowDeletePopup(false);
  };

  return (
    <BackgroundLayout
      blueHeight={80}
      showHeader={true}
      headerTitle="Staff"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={true}
      searchData={[]}
      onSearchResults={() => {}}
    >
      <View style={styles.card}>
        {selectedProfile ? (
          <View style={styles.profileCard}>
            <Image source={selectedProfile.image} style={styles.avatar} />
            <Text style={styles.name}>{selectedProfile.name}</Text>
            <Text style={styles.detail}>Staff ID: <Text style={styles.link}>rani25</Text></Text>
            <Text style={styles.detail}>Role: <Text style={styles.link}>{selectedProfile.role}</Text></Text>
            <Text style={styles.detail}>Assigned Area: <Text style={styles.link}>Wing A – Wing B</Text></Text>
            <Text style={styles.detail}>Shift Timing: <Text style={styles.link}>8 AM – 6 PM</Text></Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => setShowCalendar(true)}>
                <Text style={styles.btnText}>View Attendance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Add to 101</Text></TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Works at:</Text>
            <View style={styles.tagContainer}>
              {['A-101', 'A-208', 'A-208'].map((flat, index) => (
                <View key={index} style={styles.tag}><Text style={styles.tagText}>{flat}</Text></View>
              ))}
            </View>
          </View>
        ) : (
          <>
            {selectedStaffList.length === 0 ? (
              <>
                <Image source={require('../assets/images/sttaf.png')} style={styles.image} resizeMode="contain" />
                <Text style={styles.subtitle}>
                  Monitor staff arrivals in real-time and keep a streamlined record of their attendance.
                </Text>
              </>
            ) : (
              selectedStaffList.map((staff) => (
                <TouchableOpacity
                  key={staff.id}
                  onPress={() => {
                    setSelectedProfile(staff);
                    removeStaff(staff.id);
                  }}
                >
                  <View style={styles.assignedCard}>
                    <View style={styles.assignedRow}>
                      <View style={styles.assignedLeft}>
                        <Image source={staff.image} style={styles.staffImage} />
                        <View>
                          <Text style={styles.staffName}>{staff.name}</Text>
                          <Text style={styles.staffRole}>{staff.role}</Text>
                          <Text style={styles.lastVisit}>{staff.lastVisit}</Text>
                        </View>
                      </View>
                      <TouchableOpacity>
                        <Image source={require('../assets/societyflats/call.png')} style={styles.callIcon} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.trashContainer}>
                      <TouchableOpacity onPress={() => openDeletePopup(staff.id)}>
                        <Image source={require('../assets/icon/Vector.png')} style={{ width: 20, height: 20 }} resizeMode="contain" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </>
        )}
      </View>

      
      <Fab onPress={() => setModalVisible(true)} />


      <PopUp visible={modalVisible} onClose={() => setModalVisible(false)}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={[styles.addNewCard, { marginHorizontal: 5 }]}
          onPress={() => navigation.navigate('staffadd')}
        >
          <Image source={require('../assets/icon/Staaf.png')} style={styles.addIcon} />
          <View>
            <Text style={styles.addTitle}>Add New Staff</Text>
            <Text style={styles.addSubtitle}>Click here to add new Staff</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          data={filteredStaff}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => {
            const isSelected = selectedStaffList.some(s => s.id === item.id);
            return (
              <TouchableOpacity
                style={[
                  styles.staffItem,
                  {
                    marginHorizontal: 5,
                    backgroundColor: isSelected ? '#D3E7FF' : 'white',
                  },
                ]}
                onPress={() => toggleStaffSelection(item)}
              >
                <View style={styles.staffRow}>
                  <Image source={item.image} style={styles.staffImage} />
                  <View>
                    <Text style={styles.staffName}>{item.name}</Text>
                    <Text style={styles.staffRole}>{item.role}</Text>
                    <Text style={styles.lastVisit}>{item.lastVisit}</Text>
                  </View>
                </View>
                {isSelected && (
                  <Image source={require('../assets/icon/checked.png')} style={styles.checkIcon} />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </PopUp>

      {showDeletePopup && (
        <DeletePopUp
          visible={showDeletePopup}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      {showCalendar && (
        <View style={styles.fullScreenCalendar}>
          <Calendar navigation={navigation} />
        </View>
      )}
    </BackgroundLayout>
  );
};

export default Staff;


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5FBFF' },
  card: { flex: 1, alignItems: 'center', paddingTop: 10 },
  image: { marginTop: 170, width: 300, height: 300, marginBottom: 20 },
  subtitle: {
    fontSize: 18,
    color: '#263238',
    textAlign: 'center',
    lineHeight: 24,
    marginHorizontal: 20,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 90,
    backgroundColor: '#ff9100',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 12,
    color: '#000',
    backgroundColor: '#fff',
  },
  addNewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addIcon: { width: 50, height: 50, marginRight: 12 },
  addTitle: { fontWeight: 'bold', fontSize: 16, color: '#000' },
  addSubtitle: { fontSize: 14, color: '#666' },
  flatListContent: { paddingBottom: 20 },
  staffItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    height: 70,
    justifyContent: 'space-between',
  },
  staffRow: { flexDirection: 'row', alignItems: 'center' },
  staffImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 25,
  },
  staffName: { fontWeight: '600', fontSize: 16, color: '#000' },
  staffRole: { fontSize: 14, color: '#777' },
  lastVisit: { fontSize: 12, color: '#555' },
  checkIcon: { width: 20, height: 20, marginRight: 10 },
  assignedCard: {
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
    justifyContent: 'space-between',
  },
  assignedRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  assignedLeft: { flexDirection: 'row', alignItems: 'center' },
  callIcon: { width: 24, height: 24, marginRight: 20, marginTop: -10 },
  trashContainer: { position: 'absolute', right: 10, bottom: 10,marginRight:20, },
  profileCard: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold', marginVertical: 5 },
  detail: { fontSize: 16, marginVertical: 2 },
  link: { color: '#007bff' },
  sectionTitle: { marginTop: 20, fontWeight: 'bold', fontSize: 16 },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 4,
  },
  tagText: { color: '#007bff' },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  btnText: { color: '#fff', fontWeight: 'bold' },

  // Calendar full screen style
  fullScreenCalendar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
