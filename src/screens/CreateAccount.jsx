import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RegisteredApi } from '../api/APICall';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Modal,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const initialErrors = {
  fullName: '',
  email: '',
  mobile: '',
  password: '',
  confirmPass: '',
};

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerified, setMobileVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigation = useNavigation();

  const isFormValid =
    fullName.trim() !== '' &&
    email.trim() !== '' &&
    mobile.trim() !== '' &&
    password !== '' &&
    confirmPass !== '' &&
    password === confirmPass;

  const handleBlur = (field) => {
    let errorMsg = '';
    switch (field) {
      case 'fullName':
        if (!fullName.trim()) errorMsg = 'Full name is required';
        break;
      case 'email':
        if (!email.includes('@')) errorMsg = 'Invalid email address';
        break;
      case 'mobile':
        if (mobile.trim().length < 10) errorMsg = 'Enter a valid mobile number';
        break;
      case 'password':
        if (password.length < 6) errorMsg = 'Password must be at least 6 characters';
        break;
      case 'confirmPass':
        if (confirmPass !== password) errorMsg = 'Passwords do not match';
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

    const handleCreateAccount = async () => {
  if (!isFormValid) {
    Alert.alert('Error', 'Please fill all fields correctly.');
    return;
  }

  const payload = {
    usertyperecno: 1,
    descn: fullName,
    mobile: mobile,
    address: '',
    email: email,
    pwd: password,
    tenantrecno: 1,
    towerno: '',
    flatno: '',
    status: 1,
    communicationpreferences: null,
    securityauthenticationid: null,
    transactionid: null,
    contributionformid: null,
    paymentdetailsid: null,
    active: 1,
    altermobile: null,
    dob: '19900101',
    gender: 1,
    pincode: '0000000',
    propcode: '',
    movedate: null,
    adharcard: '',
    pancard: '',
    allotmentletter: ''
  };

  try {
    console.log("Payload to send:", payload);
    const response = await RegisteredApi(payload);
    console.log('Registration Success:', response);
    setShowSuccessModal(true);
  } catch (error) {
    const errorMsg = error?.response?.data?.Message?.toLowerCase() || 'Something went wrong. Try again.';

    // Reset field errors first
    setErrors(prev => ({
      ...prev,
      email: '',
      mobile: ''
    }));

    // Friendly messages instead of raw backend messages
    if (errorMsg.includes('email')) {
      setErrors(prev => ({ ...prev, email: 'Email ID is already registered.' }));
    } else if (errorMsg.includes('mobile')) {
      setErrors(prev => ({ ...prev, mobile: 'Mobile number is already registered.' }));
    } else {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }

    console.error('Registration Error:', error?.response?.data || error.message);
  }
};





  return (
    <View style={styles.container}>
      {/* Tab Switcher */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, styles.inactiveTab]}
          onPress={() => navigation.navigate('login')}
        >
          <Text style={styles.tabText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, styles.activeTab]}
          onPress={() => navigation.navigate('createAccount')}
        >
          <Text style={[styles.tabText, styles.activeTabText]}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          {/* Full Name */}
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={20} color="#aaa" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={(t) => {
                setFullName(t);
                setErrors({ ...errors, fullName: '' });
              }}
              onBlur={() => handleBlur('fullName')}
              placeholderTextColor="#aaa"
            />
          </View>
          {errors.fullName ? <Text style={styles.errorText}>{errors.fullName}</Text> : null}

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <View style={[styles.inputBox, emailVerified && styles.verifiedBox]}>
            <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              value={email}
              onChangeText={(t) => {
                setEmail(t);
                setEmailVerified(false);
                setErrors({ ...errors, email: '' });
              }}
              onBlur={() => handleBlur('email')}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#aaa"
            />
          </View>
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          {/* Mobile */}
          <Text style={styles.label}>Mobile No.</Text>
          <View style={[styles.inputBox, mobileVerified && styles.verifiedBox]}>
            <Ionicons name="call-outline" size={20} color="#aaa" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="+91 1234567899"
              value={mobile}
              onChangeText={(t) => {
                setMobile(t);
                setMobileVerified(false);
                setErrors({ ...errors, mobile: '' });
              }}
              onBlur={() => handleBlur('mobile')}
              keyboardType="phone-pad"
              placeholderTextColor="#aaa"
            />
          </View>
          {errors.mobile ? <Text style={styles.errorText}>{errors.mobile}</Text> : null}

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(t) => {
                setPassword(t);
                setErrors({ ...errors, password: '' });
              }}
              onBlur={() => handleBlur('password')}
              secureTextEntry={!showPass}
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Ionicons name={showPass ? 'eye-off-outline' : 'eye-outline'} size={20} color="#aaa" />
            </TouchableOpacity>
          </View>
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

          {/* Confirm Password */}
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPass}
              onChangeText={(t) => {
                setConfirmPass(t);
                setErrors({ ...errors, confirmPass: '' });
              }}
              onBlur={() => handleBlur('confirmPass')}
              secureTextEntry={!showConfirmPass}
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity onPress={() => setShowConfirmPass(!showConfirmPass)}>
              <Ionicons name={showConfirmPass ? 'eye-off-outline' : 'eye-outline'} size={20} color="#aaa" />
            </TouchableOpacity>
          </View>
          {errors.confirmPass ? <Text style={styles.errorText}>{errors.confirmPass}</Text> : null}

          <View style={{ height: 110 }} />
        </ScrollView>

        {/* Submit Button */}
        <View style={styles.fixedBtnContainer}>
          <TouchableOpacity
            style={[styles.createBtn, !isFormValid && { opacity: 0.5 }]}
            activeOpacity={0.8}
            onPress={handleCreateAccount}
            disabled={!isFormValid}
          >
            <LinearGradient
              colors={['#4f93f7', '#2266e2']}
              style={styles.gradientBtn}
            >
              <Text style={styles.createBtnText}>Create Account</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.termsText}>
            By continuing I agree with Privacy Policy and Terms & Conditions
          </Text>
        </View>
      </KeyboardAvoidingView>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={64} color="#fff" />
            </View>
            <Text style={styles.modalTitle}>Your account has been created successfully.</Text>
            <Text style={styles.modalSubtitle}>You can now log in and explore the app!</Text>
            <TouchableOpacity
              style={styles.okBtn}
              onPress={() => {
                setShowSuccessModal(false);
                navigation.navigate('addHome');
              }}
            >
              <Text style={styles.okBtnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FCFF',
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 36 : 24,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#ffffff',
  },
  inactiveTab: {
    backgroundColor: '#f3f4f6',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9ca3af',
  },
  activeTabText: {
    color: '#1e1e2d',
    fontWeight: '700',
  },

  scrollContent: {
    padding: 18,
    paddingBottom: 40,
  },
  label: {
    marginBottom: 6,
    color: '#222',
    fontWeight: '700',
    fontSize: 14,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#e5e7eb',
    marginBottom: 4,
    paddingHorizontal: 12,
    height: 52,
  },
  verifiedBox: {
    borderColor: '#2266e2',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#222',
    fontSize: 15,
    paddingVertical: 0,
    fontWeight: '350',
  },
  verifiedCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#2266e2',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  verifiedText: {
    fontSize: 12,
    color: '#2266e2',
    marginLeft: 6,
    fontWeight: '700',
  },
  errorText: {
    color: '#e53935',
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 4,
    fontWeight: '500',
  },

  fixedBtnContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 28 : 16,
    borderTopWidth: 0,
    elevation: 8,
  },
  createBtn: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 8,
  },
  gradientBtn: {
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
  },
  createBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.2,
  },
  termsText: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '500',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    padding: 28,
    elevation: 10,
  },
  checkCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#4cd964',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 18,
  },
  okBtn: {
    backgroundColor: '#2266e2',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 36,
    marginTop: 6,
  },
  okBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});
