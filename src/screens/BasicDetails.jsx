import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';

const images = [
  require('../assets/images/hall.png'),
  require('../assets/images/hall.png'),
  require('../assets/images/hall.png'),
];

const details = [
  { label: 'Flat/House Number/Identifier:', value: '101' },
  { label: 'Block/Wing:', value: 'A' },
  { label: 'Floor Number:', value: '1' },
  { label: 'Flat Type:', value: '2 BHK' },
  { label: 'Flat area (Sq. Ft):', value: '950 sq.ft' },
  { label: 'Status:', value: 'Self Occupied' },
  { label: 'Intercom/Extension:', value: '0101' },
  { label: 'Possession Date:', value: '15-Mar-2021' },
  { label: 'Facing Direction:', value: 'East' },
  { label: 'Parking Slots:', value: '1 (Basement)' },
];

const { width } = Dimensions.get('window');

const BasicDetails = ({ navigation }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const flatListRef = useRef();

  const scrollToNextImage = React.useCallback(() => {
    const nextIndex = (currentImage + 1) % images.length;
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentImage(nextIndex);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(scrollToNextImage, 3000); // 3 seconds auto-scroll
    return () => clearInterval(interval);
  }, [scrollToNextImage]);

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentImage(index);
  };

  return (
    <BackgroundLayout
      blueHeight={80}
      showHeader={true}
      headerTitle="Basic Details"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={true}
      searchData={details}
      onSearchResults={() => {}}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image Carousel */}
        <FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          data={images}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          onScroll={onScroll}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <Image source={item} style={styles.imageBox} />
          )}
        />

        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { opacity: currentImage === index ? 1 : 0.3 },
              ]}
            />
          ))}
        </View>

        {/* Flat Details Card */}
        <View style={styles.card}>
          {details.map((item, idx) => (
            <View key={idx} style={styles.row}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  scrollContent: { padding: 16 },
  imageBox: {
    width: width,
    height: 180,
    borderRadius: 10,
    marginRight: 12,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginHorizontal: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 43,
  },
  label: {
    color: '#555',
    fontSize: 16,
    flex: 1,
  },
  value: {
    color: '#007AFF',
    fontWeight: '800',
    flex: 1,
    textAlign: 'right',
  },
});

export default BasicDetails;
