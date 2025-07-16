import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';

const AddMembers = () => {
  const [selectedType, setSelectedType] = useState('Owner');
  const [selectedPriority, setSelectedPriority] = useState('Primary');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [altName, setAltName] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add Members</Text>

      <View style={styles.uploadBox}>
        <TouchableOpacity style={styles.uploadInner} onPress={handleImagePick}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.imagePreview} />
          ) : (
            <>
              <Icon name="cloud-upload" size={40} color="#4da6ff" />
              <Text style={styles.uploadText}>
                Drag your Image or <Text style={styles.browse}>browse</Text>
              </Text>
              <Text style={styles.fileTypes}>jpg, png, or svg</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Owner" value="Owner" />
          <Picker.Item label="Tenant" value="Tenant" />
        </Picker>
      </View>

      <View style={styles.errorInputWrapper}>
        <TextInput
          style={styles.errorInput}
          placeholder="Email ID"
          value={email}
          onChangeText={setEmail}
        />
        <Icon name="cancel" size={20} color="#333" style={styles.cancelIcon} />
        <Text style={styles.errorText}>Errors about input text</Text>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.blueInput}
          placeholder="Name"
          value={altName}
          onChangeText={setAltName}
        />
        <Icon name="cancel" size={20} color="#333" style={styles.cancelIcon} />
      </View>

      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedPriority}
          onValueChange={(itemValue) => setSelectedPriority(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Primary" value="Primary" />
          <Picker.Item label="Secondary" value="Secondary" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddMembers;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fefefe',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#002b5c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
    alignSelf: 'center',
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadInner: {
    alignItems: 'center',
  },
  uploadText: {
    marginTop: 8,
    color: '#777',
  },
  browse: {
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
  fileTypes: {
    fontSize: 12,
    color: '#aaa',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  errorInputWrapper: {
    marginBottom: 5,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#ffe6e6',
    padding: 12,
    borderRadius: 6,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  cancelIcon: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  blueInput: {
    borderWidth: 1,
    borderColor: '#007bff',
    padding: 12,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: '#3399ff',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
