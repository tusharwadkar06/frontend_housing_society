import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const FlatDocuments = ({ navigation }) => {
  return (
    <BackgroundLayout
      blueHeight={100}
      showHeader={true}
      headerTitle="Documents"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={false}
      searchData={[]}
      onSearchResults={() => {}}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/images/blankdocument.png')} 
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>No Documents files yet !</Text>
        <Text style={styles.subtitle}>
          No documents here — but you can always{'\n'}upload one
        </Text>

        <TouchableOpacity
          style={styles.fab}
          onPress={() => {
            // navigate or open upload modal
          }}
        >
          <Icon name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </BackgroundLayout>
  );
};

export default FlatDocuments;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5FBFF',
  },
  image: {
    width: width * 0.9,
    height: height * 0.5,
   marginTop:'-50',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#263238',
    textAlign: 'center',
    marginTop: -80,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 6,
  },
  fab: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#ff9100',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
