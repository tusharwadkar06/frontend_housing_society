import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ApprovalPending = () => {
  const [faq1Visible, setFaq1Visible] = useState(false);
  const [faq2Visible, setFaq2Visible] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const navigation = useNavigation();

  const toggleFaq = (setter) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setter((prev) => !prev);
  };

  // Commented API polling section
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      checkApprovalStatus();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const checkApprovalStatus = async () => {
    try {
      const response = await fetch('https://your-api-url.com/check-approval-status');
      const data = await response.json();

      if (data.status === 'approved') {
        navigation.replace('Login');
      }
    } catch (error) {
      console.error('Approval check failed:', error);
    }
  };
  */

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 120,
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Top Blue Header */}
        <View style={styles.topBar}>
          <View style={styles.header}>
            <Icon name="menu" size={24} color="#fff" />
            <Text style={styles.headerText}>Hi, Naman</Text>
            <View style={{ flex: 1 }} />
            <Icon name="bell-outline" size={24} color="#fff" />
          </View>
          <View style={styles.subHeader}>
            <Text style={styles.societyText}>Life Republic by Kolte Patil</Text>
            <Text style={styles.flatText}>B1-707</Text>
          </View>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <LinearGradient colors={['#1E3A8A', '#1976D2']} style={styles.gradientHeader}>
            <Text style={styles.cardTitle}>Approval Pending</Text>
            <Text style={styles.cardSubtitle}>
              Your account needs approval from your Society Office or Management Committee to ensure that only verified residents get access to Housing society.
            </Text>
          </LinearGradient>

          {/* Timeline */}
          <View style={styles.timeline}>
            {/* Step 1 */}
            <View style={styles.stepRow}>
              <View style={styles.iconColumn}>
                <View style={styles.iconCircleFilled}>
                  <Icon name="check" size={16} color="#fff" />
                </View>
                <View style={styles.verticalLine} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Application submitted to society</Text>
                <Text style={styles.stepDescription}>
                  We’ve sent your request to your society admin on 18 Jun 2025, 06:02 PM
                </Text>
              </View>
            </View>

            {/* Step 2 */}
            <View style={styles.stepRow}>
              <View style={styles.iconColumn}>
                <View style={styles.iconCircleFilled}>
                  <Icon name="bell-ring-outline" size={16} color="#fff" />
                </View>
                <View style={styles.verticalLine} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>We’re reminding</Text>
                <Text style={styles.stepDescription}>We send reminders every 24 Hours</Text>
              </View>
            </View>

            {/* Step 3 with Navigation */}
            <TouchableOpacity
              style={styles.stepRow}
              onPress={() => navigation.replace('login')}
            >
              <View style={styles.iconColumn}>
                <View style={styles.iconCircleBlueOutline}>
                  <Icon name="shield-check-outline" size={16} color="#3B82F6" />
                </View>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Verification by Society Admin</Text>
                <Text style={styles.stepDescription}>Most approvals happen within 7 hours.</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* FAQ */}
          <View style={styles.faqContainer}>
            <Text style={styles.faqHeading}>FAQ</Text>

            <TouchableOpacity style={styles.faqItem} onPress={() => toggleFaq(setFaq1Visible)}>
              <Text style={styles.faqQuestion}>
                My Approval is pending for more than 72 hours, What can I do?
              </Text>
              <Icon name={faq1Visible ? 'chevron-up' : 'chevron-down'} size={22} color="#000" />
            </TouchableOpacity>
            {faq1Visible && (
              <Text style={styles.faqAnswer}>
                For faster approvals, we suggest reaching out to your society office to see if there is any other pending action (such as document submission, payments etc).
              </Text>
            )}

            <TouchableOpacity style={styles.faqItem} onPress={() => toggleFaq(setFaq2Visible)}>
              <Text style={styles.faqQuestion}>
                No one is approving. Can <Text style={styles.linkText}>Housing Society help?</Text>
              </Text>
              <Icon name={faq2Visible ? 'chevron-up' : 'chevron-down'} size={22} color="#000" />
            </TouchableOpacity>
            {faq2Visible && (
              <Text style={styles.faqAnswer}>
                Yes, you can contact Housing Society support team via help section in the app.
              </Text>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer activeTab={activeTab} onTabPress={(tab) => setActiveTab(tab)} />
    </View>
  );
};

export default ApprovalPending;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  topBar: {
    backgroundColor: '#1976D2',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  headerText: { color: '#fff', fontSize: width * 0.045, fontWeight: '600', marginLeft: 10 },
  subHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  societyText: { color: '#fff', fontSize: width * 0.035 },
  flatText: { color: '#fff', fontSize: width * 0.035, fontWeight: '500' },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  gradientHeader: {
    padding: 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  cardTitle: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: width * 0.034,
    color: '#E3F2FD',
  },
  timeline: { padding: 16 },
  stepRow: { flexDirection: 'row', marginBottom: 20 },
  iconColumn: { width: 30, alignItems: 'center' },
  iconCircleFilled: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircleBlueOutline: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalLine: {
    width: 2,
    height: 40,
    backgroundColor: '#000',
    marginTop: 2,
  },
  stepContent: { marginLeft: 12, flex: 1 },
  stepTitle: { fontSize: width * 0.038, fontWeight: '600', color: '#000' },
  stepDescription: { fontSize: width * 0.032, color: '#555', marginTop: 2 },
  faqContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  faqHeading: {
    fontSize: width * 0.038,
    fontWeight: '600',
    color: '#0D47A1',
    marginTop: 12,
    marginBottom: 6,
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  faqQuestion: {
    flex: 1,
    fontSize: width * 0.034,
    color: '#000',
  },
  faqAnswer: {
    fontSize: width * 0.032,
    color: '#444',
    paddingLeft: 4,
    marginBottom: 10,
  },
  linkText: {
    color: '#1976D2',
    textDecorationLine: 'underline',
  },
});
