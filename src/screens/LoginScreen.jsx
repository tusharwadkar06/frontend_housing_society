import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundLayout from '../components/BackgroundLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginApi } from '../api/APICall';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('shilpa@gmail.com');
  const [password, setPassword] = useState('Shilpa@123');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }

    const payload = {
      email: email.trim(),
      pwd: password.trim(),
    };

    try {
      console.log('🔐 Login Payload:', payload);

      const response = await LoginApi(payload);
      console.log(' Raw API Response:', JSON.stringify(response, null, 2));

      const success = response?.Success;
      const userList = response?.Message;

      if (!success || !Array.isArray(userList) || userList.length === 0) {
        Alert.alert('Login Failed', 'Invalid response from server.');
        return;
      }

      const user = userList[0];

      // Optional: If you want to store user or token (if available in future)
      await AsyncStorage.setItem('user_details', JSON.stringify(user));
      if (remember) {
        await AsyncStorage.setItem('remember_login', 'true');
      }

      navigation.reset({
        index: 0,
        routes: [{ name: 'homescreen' }],
      });

    } catch (error) {
      console.error(' Login Error:', error?.response?.data || error.message);
      Alert.alert('Login Failed', error?.response?.data?.message || 'Something went wrong.');
    }
  };



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        <BackgroundLayout blueHeight={210} showHeader={false}>
          {/* Header - inside blue background */}
          <View style={styles.absoluteHeader}>
            <View style={styles.logoRow}>
              <Icon name="shield-account" size={20} color="#fff" style={{ marginRight: 6 }} />
              <Text style={styles.logoText}>Logo</Text>
            </View>
            <Text style={styles.headerTitle}>Get Started now</Text>
            <Text style={styles.headerSubtitle}>
              Create an account or log in to explore about our app
            </Text>
          </View>

          {/* Form - inside white container */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, styles.activeTab]}
              onPress={() => navigation.navigate('login')}
            >
              <Text style={[styles.tabText, styles.activeTabText]}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, styles.inactiveTab]}
              onPress={() => navigation.navigate('createAccount')}
            >
              <Text style={styles.tabText}>Create Account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Icon name="email-outline" size={20} color="#aaa" style={styles.inputIcon} />
              <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#aaa"
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <Icon name="lock-outline" size={20} color="#aaa" style={styles.inputIcon} />
              <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPass}
                placeholderTextColor="#aaa"
              />
              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                <Icon name={showPass ? 'eye-off-outline' : 'eye-outline'} size={20} color="#aaa" />
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <View style={styles.rememberMe}>
                <CheckBox
                  value={remember}
                  onValueChange={setRemember}
                  tintColors={{ true: '#2266e2', false: '#aaa' }}
                  boxType={Platform.OS === 'ios' ? 'square' : undefined}
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.8}
              // onPress={() => navigation.navigate('homescreen')}
              onPress={handleLogin}
            >
              <LinearGradient
                colors={['#2266e2', '#3b82f6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientBtn}
              >
                <Text style={styles.loginButtonText}>Log In</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.divider} />
            </View>

            <TouchableOpacity style={styles.socialButton}>
              <Icon name="phone-outline" size={20} color="#1a1a1a" />
              <Text style={styles.socialButtonText}>Phone Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="google" size={20} color="#ea4335" />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
        </BackgroundLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  absoluteHeader: {
    marginBottom: 20,
    marginTop: -180,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#e0e7ff',
    fontSize: 13,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
    marginTop: 30,
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
  form: {
    marginBottom: 15,
  },
  label: {
    color: '#222',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#222',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#888',
    fontSize: 13,
  },
  forgotText: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: 13,
  },
  loginButton: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },
  gradientBtn: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 8,
    color: '#888',
    fontWeight: '600',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginBottom: 12,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  socialButtonText: {
    marginLeft: 8,
    color: '#222',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default LoginScreen;
