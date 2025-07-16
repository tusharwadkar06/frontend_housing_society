import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const OTPVerification = () => {
  const onVerifyPress = useCallback(() => {
    alert('Verify Pressed');
  }, []);

  const otp = ['7', '1', '5', '2']; // Replace with real OTP state or TextInput later

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Circles */}
      <View style={styles.circleBig} />
      <View style={styles.circleSmall} />
      <View style={styles.circleMid} />

   

      {/* Title and Subtitle */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>
          Enter the OTP sent to <Text style={styles.phone}>+91 1234567899</Text>
        </Text>
      </View>

      {/* OTP Digits */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <View key={index} style={styles.otpBox}>
            <Text style={styles.otpDigit}>{digit}</Text>
          </View>
        ))}
      </View>

      {/* Timer */}
      <Text style={styles.timer}>00:120 Sec</Text>

      {/* Resend Link */}
      <Text style={styles.resend}>
        Haven’t got the code yet? <Text style={styles.resendLink}>Resend code</Text>
      </Text>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button} onPress={onVerifyPress}>
        <Text style={styles.buttonText}>Verify Code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  circleBig: {
    position: 'absolute',
    top: -122,
    left: 213,
    width: 341,
    height: 341,
    borderRadius: 170.5,
    backgroundColor: 'rgba(45, 135, 240, 0.1)',
  },
  circleSmall: {
    position: 'absolute',
    top: 11,
    left: 85,
    width: 97,
    height: 97,
    borderRadius: 48.5,
    backgroundColor: 'rgba(45, 135, 240, 0.1)',
  },
  circleMid: {
    position: 'absolute',
    top: -137,
    left: -127,
    width: 213,
    height: 213,
    borderRadius: 106.5,
    backgroundColor: 'rgba(45, 135, 240, 0.1)',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  timeText: {
    fontWeight: '600',
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  emojiIcon: {
    fontSize: 16,
    marginLeft: 8,
  },
  titleContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  subtitle: {
    fontSize: 14,
    color: '#5b5858',
    fontFamily: 'Poppins',
  },
  phone: {
    color: '#2d87f0',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  otpBox: {
    width: 58,
    height: 58,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  otpDigit: {
    fontSize: 24,
    fontWeight: '500',
  },
  timer: {
    fontSize: 14,
    fontFamily: 'Nunito Sans',
    color: '#464646',
    textAlign: 'center',
    marginBottom: 10,
  },
  resend: {
    fontSize: 14,
    textAlign: 'center',
    color: '#989898',
    marginBottom: 30,
  },
  resendLink: {
    textDecorationLine: 'underline',
    color: '#648ddb',
  },
  button: {
    backgroundColor: '#1d61e7',
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(37, 62, 167, 0.48)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
});
