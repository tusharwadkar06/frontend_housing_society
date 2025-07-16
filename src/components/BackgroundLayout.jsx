import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Header from './Header';
import Footer from './Footer';
const { width } = Dimensions.get('window');

const BackgroundLayout = ({
  children,
  blueHeight = 160,
  showHeader = true,
  onBack,
  onNotification,
  headerTitle = '',
  showBadge = false,
  searchData = [],
  onSearchResults = () => {},
  showFooter = false,
  onTabPress = () => {},
  activeTab = '',
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#2d87f0"
        translucent={false}
      />

      {/* Blue Background with Rings */}
      <View style={[styles.blueBackground, { height: blueHeight }]}>
        {/* Decorative Rings */}
        <Svg height={width * 0.9} width={width * 0.9} style={styles.bigRing}>
          <Circle
            cx="50%"
            cy="50%"
            r={width * 0.35}
            stroke="#00BFFF"
            strokeWidth={width * 0.1}
            fill="none"
            opacity={0.1}
          />
        </Svg>

        <Svg height={100} width={100} style={styles.mediumRing}>
          <Circle
            cx="50%"
            cy="50%"
            r={40}
            stroke="#00BFFF"
            strokeWidth={15}
            strokeDasharray={[12, 0]}
            strokeLinecap="round"
            fill="none"
            opacity={0.1}
          />
        </Svg>

        <Svg height={100} width={100} style={styles.smallRing}>
          <Circle
            cx="50%"
            cy="50%"
            r={40}
            stroke="#00BFFF"
            strokeWidth={21}
            strokeDasharray={[1, 0]}
            strokeLinecap="round"
            fill="none"
            opacity={0.1}
          />
        </Svg>

        {/* Optional Header */}
        {showHeader && (
          <View style={styles.headerWrapper}>
            <Header
              title={headerTitle}
              onBack={onBack}
              onNotification={onNotification}
              showBadge={showBadge}
              searchData={searchData}
              onSearchResults={onSearchResults}
            />
          </View>
        )}
      </View>

      {/* White Content Area */}
      <View
        style={[
          styles.whiteContainer,
          { marginTop: blueHeight - 20 },
          !showHeader && styles.roundedTop,
          showFooter && { paddingBottom: 90 },
        ]}
      >
        {children}
      </View>

      {/* Optional Footer (if needed) */}
      {showFooter && (
        <View style={styles.footerWrapper}>
          <Footer activeTab={activeTab} onTabPress={onTabPress} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default BackgroundLayout;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2d87f0',
  },
  blueBackground: {
    position: 'absolute',
    top: 0,
    width: width,
    backgroundColor: '#2d87f0',
    zIndex: 1,
  },
  bigRing: {
    position: 'absolute',
    right: -width * 0.4,
    top: -50,
  },
  mediumRing: {
    position: 'absolute',
    left: width * 0.25,
    top: 15,
  },
  smallRing: {
    position: 'absolute',
    left: -30,
    top: -30,
  },
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#F6FCFF',
    zIndex: 2,
    padding: 16,
  },
  roundedTop: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 16,
    right: 16,
    zIndex: 10,
  },
});
