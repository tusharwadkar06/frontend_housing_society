
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    image: require('../assets/start/Spalash1.png'),
    text: '“MANAGE YOUR FLAT EASILY”',
  },
  {
    image: require('../assets/start/Spalash2.png'),
    text: '“STAY INFORMED”',
  },
  {
    image: require('../assets/start/Spalash3.png'),
    text: '“TRACK PAYMENTS”',
  },
];

const Starts = ({ navigation }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>HOUSING{'\n'}SOCIETY</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Circle cx={width * 0.25} cy={-10} r={100} fill="rgba(0, 0, 0, 0.03)" />
        <Circle cx={width * 0.75} cy={-30} r={150} fill="rgba(0, 0, 0, 0.02)" />
        <Circle cx={width * 0.15} cy={50} r={30} fill="rgba(0, 0, 0, 0.01)" />
      </Svg>

      <View style={styles.content}>
        
        <Image
          source={slides[currentStep].image}
          style={styles.illustration}
          resizeMode="contain"
        />
         <View style={styles.paginationContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentStep === index && styles.activeDot]}
            />
          ))}
        </View> 
        <Text style={styles.quoteText}>{slides[currentStep].text}</Text>


       
      </View>

      {currentStep === slides.length - 1 ? (
        <TouchableOpacity style={styles.fullButton} onPress={() => navigation.navigate('login')}>
          <Text style={styles.fullButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('login')}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => setCurrentStep(currentStep + 1)}>
            <Text style={styles.nextButtonText}>Next →</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#298AF2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '300',
    letterSpacing: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 80,
  },
  illustration: {
    width: width * 0.9,
    height: height * 0.5,
   // marginBottom: 30,
  },
  quoteText: {
    fontSize: 22,
    fontWeight: 'normal',
    color: '#333',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 40,
    letterSpacing: 0.5,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,

  },
  activeDot: {
    backgroundColor: '#298AF2',
    width: 10,
    borderRadius: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  skipButtonText: {
    color: 'blue',
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#298AF2',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  fullButton: {
    width: width - 40,
    backgroundColor: '#298AF2',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  fullButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Starts;
