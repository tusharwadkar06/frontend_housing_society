import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const NewVisitor = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    profileImage: null,
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

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImagePick = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Image Error', response.errorMessage);
        return;
      }

      const image = response.assets[0];
      setFormData(prev => ({ ...prev, profileImage: image.uri }));
    });
  };

  const handleSave = () => {
    console.log('Saved Visitor:', formData);
    navigation.navigate('visitors', { visitor: formData });
  };

  return (
    <BackgroundLayout
      blueHeight={80}
      showHeader={true}
      headerTitle="New Visitor"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={true}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Profile Image Upload */}
          <TouchableOpacity style={styles.imageWrapper} onPress={handleImagePick}>
            <Image
              source={
                formData.profileImage
                  ? { uri: formData.profileImage }
                  : require('../assets/societyflats/StaffProfile.png')
              }
              style={styles.profileImage}
            />
            <Text style={styles.uploadText}>Tap to upload image</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Basic Details</Text>

          {[
            { label: 'Select Tower', field: 'Tower', placeholder: 'Enter tower name' },
            { label: 'Select Flat Number', field: 'phone', placeholder: '101', keyboardType: 'phone-pad' },
            { label: 'Name', field: 'gender', placeholder: 'Enter visitor name' },
            { label: 'Contact Number', field: 'currentAddress', placeholder: '+91 XXXXX XXXXX' },
            { label: 'Purpose of Visit', field: 'permanentAddress', placeholder: 'Guest' },
            { label: 'Vehicle Number', field: 'role', placeholder: 'MH xx xxxx' },
            { label: 'Visit Time and date', field: 'assignedArea', placeholder: 'E.g., 10:30 AM, 10 July' },
          ].map(({ label, field, placeholder, keyboardType }) => (
            <React.Fragment key={field}>
              <Text style={styles.label}>{label}</Text>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor="#888"
                style={styles.input}
                keyboardType={keyboardType || 'default'}
                value={formData[field]}
                onChangeText={text => handleChange(field, text)}
              />
            </React.Fragment>
          ))}

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </BackgroundLayout>
  );
};

export default NewVisitor;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  uploadText: {
    color: '#007BFF',
    marginTop: 8,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
