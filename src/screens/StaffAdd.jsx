


import React, { useState,useRef,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,

  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';


const StaffAdd = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    currentAddress: '',
    permanentAddress: '',
    role: '',
    assignedArea: '',
    startTime: '',
    endTime: '',
  });

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  const [tempTime, setTempTime] = useState({ hour: 10, minute: 0, period: 'AM' });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const hours = [...Array(12).keys()].map(i => (i + 1).toString().padStart(2, '0'));
  const minutes = [...Array(60).keys()].map(i => i.toString().padStart(2, '0'));

  const hourListRef = useRef(null);

useEffect(() => {
  if (showTimePicker && hourListRef.current) {
    const index = tempTime.hour - 1;
    hourListRef.current.scrollToOffset({
      offset: index * 40,
      animated: false,
    });
  }
}, [showTimePicker, tempTime.hour]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E9F3FF' }}>
      <Header
        title="New Staff"
        onBack={() => navigation.goBack()}
        onSearch={() => {}}
        onNotification={() => {}}
        showBadge={true}
      />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrapper}>
          <Image source={require('../assets/societyflats/StaffProfile.png')} style={styles.profileImage} />
        </View>

        <Text style={styles.sectionTitle}>Basic Details</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor="#888"
          style={styles.input}
          value={formData.name}
          onChangeText={text => handleChange('name', text)}
        />

        <Text style={styles.label}>Contact Number</Text>
        <TextInput
          placeholder="+91"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          style={styles.input}
          value={formData.phone}
          onChangeText={text => handleChange('phone', text)}
        />

        <Text style={styles.label}>Gender</Text>
        <TextInput
          placeholder="e.g Male"
          placeholderTextColor="#888"
          style={styles.input}
          value={formData.gender}
          onChangeText={text => handleChange('gender', text)}
        />

        <Text style={styles.label}>Current Address</Text>
        <TextInput
          placeholder="e.g. 123 Main Street, Pune"
          placeholderTextColor="#888"
          style={styles.input}
          value={formData.currentAddress}
          onChangeText={text => handleChange('currentAddress', text)}
        />

        <Text style={styles.label}>Permanent Address</Text>
        <TextInput
          placeholder="e.g. Shivaji Nagar, Gujrat"
          placeholderTextColor="#888"
          style={styles.input}
          value={formData.permanentAddress}
          onChangeText={text => handleChange('permanentAddress', text)}
        />

        <Text style={styles.sectionTitle}>Role/Job</Text>

        <Text style={styles.label}>Role/Designation</Text>
        <TextInput
          placeholder="e.g Housekeeping"
          placeholderTextColor="#888"
          style={styles.input}
          value={formData.role}
          onChangeText={text => handleChange('role', text)}
        />

        <Text style={styles.label}>Assigned Area</Text>
        <View style={styles.dropdownWrapper}>
          <TextInput
            placeholder="e.g Tower A & Tower B"
            placeholderTextColor="#888"
            style={styles.dropdownInput}
            value={formData.assignedArea}
            onChangeText={text => handleChange('assignedArea', text)}
          />
          <Image source={require('../assets/icon/checked.png')} style={styles.dropdownIcon} />
        </View>

        <Text style={styles.label}>Shift Timing</Text>
        <View style={styles.timeRow}>
          <TouchableOpacity
            style={styles.timeInputWrapper}
            onPress={() => {
              setSelectedField('start');
              setShowTimePicker(true);
            }}
          >
            <Text style={[styles.timeInput, !formData.startTime && { color: '#888' }]}>
              {formData.startTime || 'Start Time'}
            </Text>
            <Icon name="time-outline" size={18} color="#888" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.timeInputWrapper}
            onPress={() => {
              setSelectedField('end');
              setShowTimePicker(true);
            }}
          >
            <Text style={[styles.timeInput, !formData.endTime && { color: '#888' }]}>
              {formData.endTime || 'End Time'}
            </Text>
            <Icon name="time-outline" size={18} color="#888" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Staff</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Time Picker Modal */}
      {showTimePicker && (
        <View style={StyleSheet.absoluteFillObject}>
          <View style={styles.overlay} />
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              {selectedField === 'start' ? 'Enter Start Time' : 'Enter End Time'}
            </Text>

            <View style={styles.scrollRow}>
              {/* Hour Picker */}
             <FlatList
  ref={hourListRef}
  data={hours}
  keyExtractor={item => item}
  style={styles.scrollList}
  snapToInterval={40}
  decelerationRate="fast"
  showsVerticalScrollIndicator={false}
  getItemLayout={(_, index) => ({ length: 40, offset: 40 * index, index })}
  onMomentumScrollEnd={e => {
    const index = Math.round(e.nativeEvent.contentOffset.y / 40);
    const hour = index + 1;
    setTempTime(prev => ({ ...prev, hour }));
  }}
  renderItem={({ item }) => {
    const isSelected = parseInt(item, 10) === tempTime.hour;
    return (
      <View style={[styles.scrollItem, isSelected && styles.selectedItem]}>
        <Text style={[styles.scrollText, isSelected && styles.selectedText]}>{item}</Text>
      </View>
    );
  }}
/>


              <Text style={styles.colon}>:</Text>

              {/* Minute Picker */}
              <FlatList
                data={minutes}
                keyExtractor={item => item}
                style={styles.scrollList}
                snapToInterval={40}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                getItemLayout={(_, index) => ({ length: 40, offset: 40 * index, index })}
                onMomentumScrollEnd={e => {
                  const index = Math.round(e.nativeEvent.contentOffset.y / 40);
                  const minute = index;
                  setTempTime(prev => ({ ...prev, minute }));
                }}
                renderItem={({ item }) => {
                  const isSelected = parseInt(item, 10) === tempTime.minute;
                  return (
                    <View style={[styles.scrollItem, isSelected && styles.selectedItem]}>
                      <Text style={[styles.scrollText, isSelected && styles.selectedText]}>{item}</Text>
                    </View>
                  );
                }}
              />

              {/* AM/PM */}
              <View style={styles.ampmBox}>
                {['AM', 'PM'].map(p => (
                  <TouchableOpacity key={p} onPress={() => setTempTime({ ...tempTime, period: p })}>
                    <Text style={[styles.ampm, tempTime.period === p && styles.ampmSelected]}>{p}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setShowTimePicker(false)}>
                <Text style={styles.cancelBtn}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const finalTime = `${tempTime.hour.toString().padStart(2, '0')}:${tempTime.minute
                    .toString()
                    .padStart(2, '0')} ${tempTime.period}`;
                  handleChange(selectedField === 'start' ? 'startTime' : 'endTime', finalTime);
                  setShowTimePicker(false);
                }}
              >
                <Text style={styles.okBtn}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', backgroundColor: '#E9F3FF' },
  imageWrapper: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 139, height: 139, borderRadius: 40, resizeMode: 'cover' },
  sectionTitle: { alignSelf: 'flex-start', fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 10, marginBottom: 6 },
  label: { alignSelf: 'flex-start', fontSize: 14, fontWeight: '500', color: '#333', marginBottom: 4, marginTop: 8 },
  input: {
    width: '100%', height: 48, backgroundColor: '#fff', borderRadius: 10,
    paddingHorizontal: 16, fontSize: 14, marginBottom: 4, borderColor: '#ccc', borderWidth: 1,
  },
  dropdownWrapper: {
    width: '100%', height: 48, backgroundColor: '#fff', borderRadius: 10,
    borderColor: '#ccc', borderWidth: 1, flexDirection: 'row',
    alignItems: 'center', paddingHorizontal: 16, marginBottom: 10,
  },
  dropdownInput: { flex: 1, fontSize: 14 },
  dropdownIcon: { width: 16, height: 16, tintColor: '#888' },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  timeInputWrapper: {
    width: '48%', height: 48, borderRadius: 10, backgroundColor: '#fff',
    borderColor: '#ccc', borderWidth: 1, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, marginBottom: 10,
  },
  timeInput: { fontSize: 14 },
  button: {
    backgroundColor: '#007BFF', paddingVertical: 12, paddingHorizontal: 32,
    borderRadius: 10, marginTop: 15, width: '100%', alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  modalContainer: {
    position: 'absolute', top: 50, left: 20, right: 20,
    backgroundColor: '#fff', borderRadius: 10, padding: 20, elevation: 10,
  },
  modalTitle: { fontSize: 16, color: '#555', marginBottom: 15 },
  scrollRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10 },
  scrollList: { height: 120, width: 60 },
  scrollItem: { height: 40, justifyContent: 'center', alignItems: 'center' },
  scrollText: { fontSize: 22, color: '#000' },
  selectedItem: { backgroundColor: '#E7E7E7', borderRadius: 6, paddingHorizontal: 10 },
  selectedText: { color: '#2196F3', fontWeight: 'bold' },
  colon: { fontSize: 28, marginHorizontal: 10, color: '#444' },
  ampmBox: { marginLeft: 10, justifyContent: 'center', backgroundColor: '#eee', borderRadius: 6 },
  ampm: { paddingVertical: 5, paddingHorizontal: 10, color: '#888', textAlign: 'center' },
  ampmSelected: { backgroundColor: '#fff', color: '#2196F3', fontWeight: 'bold', borderRadius: 4 },
  modalButtons: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 },
  cancelBtn: { color: '#2196F3', marginRight: 20, fontSize: 16 },
  okBtn: { color: '#2196F3', fontWeight: 'bold', fontSize: 16 },
});

export default StaffAdd;
