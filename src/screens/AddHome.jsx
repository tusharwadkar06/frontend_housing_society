import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const AddHome = () => {

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [society, setSociety] = useState('');
  const [building, setBuilding] = useState('');
  const [flatNo, setFlatNo] = useState('');
  const [youAre, setYouAre] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [uploadedDoc, setUploadedDoc] = useState(null);


  const handleDocumentPick = async () => {
    const options = {
      mediaType: 'mixed',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled picker');
      } else if (response.errorCode) {
        console.log('Picker Error: ', response.errorMessage);
      } else if (response.assets?.length > 0) {
        setUploadedDoc(response.assets[0]);
      }
    });
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingHorizontal: width * 0.05, minHeight: height },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Add Home</Text>

      {/* Country */}
      <Text style={styles.label}>Country</Text>
      <View style={styles.dropdown}>
        <Picker selectedValue={country} onValueChange={(v) => setCountry(v)}>
          <Picker.Item label="Select Country" value="" />
          <Picker.Item label="India" value="India" />
        </Picker>
      </View>

      {country !== '' && (
        <>
          <Text style={styles.label}>City</Text>
          <View style={styles.dropdown}>
            <Picker selectedValue={city} onValueChange={(v) => setCity(v)}>
              <Picker.Item label="Select City" value="" />
              <Picker.Item label="Pune" value="Pune" />
            </Picker>
          </View>
        </>
      )}

      {city !== '' && (
        <>
          <Text style={styles.label}>Society</Text>
          <View style={styles.dropdown}>
            <Picker selectedValue={society} onValueChange={(v) => setSociety(v)}>
              <Picker.Item label="Select Society" value="" />
              <Picker.Item label="Life Republic by Kolte Patil" value="Life Republic by Kolte Patil" />
            </Picker>
          </View>
        </>
      )}

      {society !== '' && (
        <>
          <Text style={styles.label}>Building</Text>
          <View style={styles.dropdown}>
            <Picker selectedValue={building} onValueChange={(v) => setBuilding(v)}>
              <Picker.Item label="Select Building" value="" />
              <Picker.Item label="A Wing" value="A Wing" />
            </Picker>
          </View>
        </>
      )}

      {building !== '' && (
        <>
          <Text style={styles.label}>Flat No.</Text>
          <View style={styles.dropdown}>
            <Picker selectedValue={flatNo} onValueChange={(v) => setFlatNo(v)}>
              <Picker.Item label="Select Flat" value="" />
              <Picker.Item label="101" value="101" />
            </Picker>
          </View>
        </>
      )}

      {flatNo !== '' && (
        <>
          <Text style={styles.label}>You are</Text>
          <View style={styles.dropdown}>
            <Picker selectedValue={youAre} onValueChange={(v) => setYouAre(v)}>
              <Picker.Item label="Select Role" value="" />
              <Picker.Item label="Flat Owner" value="Flat Owner" />
              <Picker.Item label="Tenant" value="Tenant" />
            </Picker>
          </View>
        </>
      )}

      {youAre !== '' && (
        <>
          <Text style={styles.label}>Occupancy Status</Text>
          <View style={styles.dropdown}>
            <Picker selectedValue={occupancy} onValueChange={(v) => setOccupancy(v)}>
              <Picker.Item label="Select Status" value="" />
              <Picker.Item label="Flat Owner" value="Flat Owner" />
              <Picker.Item label="Tenant" value="Tenant" />
            </Picker>
          </View>
        </>
      )}

      {occupancy !== '' && (
        <>
          <Text style={styles.label}>Document Upload</Text>
          <Text style={styles.subtext}>
            The document will help the admin to quickly verify and approve the request.
          </Text>

          <TouchableOpacity style={styles.uploadBtn} onPress={handleDocumentPick}>
            <Icon name="cloud-upload-outline" size={20} color="#1474f5" />
            <Text style={styles.uploadText}>
              {uploadedDoc ? uploadedDoc.fileName || uploadedDoc.name : 'Upload File/Document'}
            </Text>
          </TouchableOpacity>
        </>
      )}

      {uploadedDoc && (
        <TouchableOpacity style={styles.submitBtn}
          onPress={() => {
           
            console.log('Flat/Villa added successfully!');
            navigation.navigate('approvalPending');
          }}
        >
          <Text style={styles.submitText}>Add Flat/Villa</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default AddHome;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: '#f5fbff',
    paddingTop: 20,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
  },
  label: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 41,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  subtext: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  uploadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  uploadText: {
    color: '#1474f5',
    marginLeft: 8,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  submitBtn: {
    backgroundColor: '#1474f5',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
