import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Defs, ClipPath, Path, Image as SvgImage } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import BackgroundLayout from '../components/BackgroundLayout';
import NoticeCard from '../components/NoticeCard';

const { width } = Dimensions.get('window');
const size = 350;
const height = 230;
const actionCardWidth = (width - 36) / 2;

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigation = useNavigation();

  const path = `
    M ${size / 2},20
    Q ${size * 0.75},40 ${size},60
    L ${size},${height}
    L 0,${height}
    L 0,60
    Q ${size * 0.25},40 ${size / 2},20
    Z
  `;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <BackgroundLayout
          blueHeight={240}
          showHeader={false}
          showFooter={true}
          activeTab={activeTab}
          onTabPress={(tab) => setActiveTab(tab)}
        >
          {/* Greeting */}
          <View style={styles.greetingWrapper}>
            <View style={styles.leftSection}>
              <View style={styles.nameRow}>
                <Image
                  source={require('../assets/icon/manu.png')}
                  style={styles.menuIcon}
                />
                <Text style={styles.greetingText}>Hi, Naman</Text>
              </View>
              <Text style={styles.societyText}>Life Republic by Kolte Patil</Text>
              <Text style={styles.flatText}>B1-707</Text>
            </View>

            <View style={styles.iconRow}>
              <Icon name="magnify" size={24} color="#fff" style={{ marginRight: 12 }} />
              <Icon name="bell-outline" size={24} color="#fff" />
            </View>
          </View>

          {/* Human Character */}
          <View style={styles.characterWrapper}>
            <Image
              source={require('../assets/images/human.png')}
              style={styles.characterImage}
              resizeMode="contain"
            />
          </View>

          {/* Pentagon Area */}
          <View style={styles.pentagonWrapper}>
            <Svg width={size} height={height}>
              <Defs>
                <ClipPath id="clip">
                  <Path d={path} />
                </ClipPath>
              </Defs>
              <SvgImage
                href={require('../assets/images/building.png')}
                width={size}
                height={height}
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#clip)"
              />
            </Svg>

            <View style={styles.pentagonIcons}>
              {[
                { label: 'Flats', icon: 'office-building' },
                { label: 'Service provider', icon: 'account-group' },
                { label: 'Expenses', icon: 'file-document-outline' },
              ].map((item, index) => (
                <View key={index} style={styles.iconColumn}>
                  <TouchableOpacity
                    style={styles.iconBox}
                    onPress={() => {
                      if (item.label === 'Flats') {
                        navigation.navigate('SocietyFlats');
                      }
                    }}
                  >
                    <Icon name={item.icon} size={30} color="#000" />
                  </TouchableOpacity>
                  <Text style={styles.iconLabel}>{item.label}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.scrollContainer}>
            {/* Summary Cards */}
            <View style={styles.cardRow}>
              {[
                { title: 'Total Flats', value: 80, gradient: ['#DEFD88', '#08774C'] },
                { title: 'Occupied', value: 60, gradient: ['#88A9FD', '#082777'] },
                { title: 'Tenant', value: 20, gradient: ['#88E7FD', '#086478'] },
                { title: 'Service Provider', value: 12, gradient: ['#FD88B3', '#780831'] },
                { title: 'Maintenance Collected', value: '₹1,40,000', gradient: ['#FDA388', '#782308'] },
                { title: 'Expenses', value: '₹80,000', gradient: ['#A788FD', '#250878'] },
              ].map((item, index) => (
                <LinearGradient
                  key={index}
                  colors={item.gradient}
                  style={styles.infoCard}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardValue}>{item.value}</Text>
                </LinearGradient>
              ))}
            </View>

            {/* Notice Board */}
            <View style={styles.noticeBoard}>
              <Text style={styles.sectionTitle}>📌 Notice Board</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[...Array(3)].map((_, i) => (
                  <NoticeCard
                    key={i}
                    backgroundImage={require('../assets/images/speaker.png')}
                    title="Society Meeting"
                    description="Meeting regarding festival planning."
                    author="Rahul Gaikwad"
                    meta="2hrs ago | 07 Apr, 2025"
                  />
                ))}
              </ScrollView>
            </View>

            {/* Quick Actions */}
            <View style={styles.quickActions}>
              <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>
              <View style={styles.actionsGrid}>
                {[
                  { icon: 'headset', title: 'HELP DESK', subtitle: 'Connect with our support team' },
                  { icon: 'ballot', title: 'Polls & Voting', subtitle: 'See members opinion' },
                  { icon: 'check-circle-outline', title: 'Approve Notice', subtitle: 'Give official approval to the notice' },
                  { icon: 'check-decagram', title: 'Approve Bill', subtitle: 'Mark this bill as officially approved' },
                  { icon: 'account-plus', title: 'Add Committee Member', subtitle: 'Add new members to committee' },
                  { icon: 'alert-circle', title: 'Send Emergency Alert', subtitle: 'Notify everyone immediately' },
                ].map((item, idx) => (
                  <TouchableOpacity key={idx} style={[styles.actionBox, { width: actionCardWidth }]}>
                    <Icon name={item.icon} size={28} color="#00BFFF" />
                    <Text style={styles.actionText}>{item.title}</Text>
                    <Text style={styles.actionSubText}>{item.subtitle}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </BackgroundLayout>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 100,
    paddingTop: 80,
  },
  greetingWrapper: {
    position: 'absolute',
    top: -200,
    left: 20,
    right: 20,
    zIndex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#fff',
  },
  greetingText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  societyText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 15,
  },
  flatText: {
    fontSize: 15,
    color: '#fff',
    marginTop: 2,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -65,
  },
  characterWrapper: {
    position: 'absolute',
    top: -170,
    right: 40,
    zIndex: 5,
  },
  characterImage: {
    width: 120,
    height: 120,
  },
  pentagonWrapper: {
    position: 'absolute',
    top: -140,
    left: (width - size) / 2,
    zIndex: 10,
  },
  pentagonIcons: {
    position: 'absolute',
    bottom: 8,
    width: size,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 15,
  },
  iconColumn: {
    alignItems: 'center',
  },
  iconBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    minWidth: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  iconLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
    marginTop: 6,
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
    backgroundColor: '#F8F8F8',
    paddingBottom: 10,
    borderRadius: 12,
  },
  infoCard: {
    width: '31.5%',
    height: 100,
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 18,
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
  },
  noticeBoard: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#263238',
    paddingLeft: 4,
  },
  quickActions: {
    marginTop: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionBox: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  actionText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  actionSubText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
