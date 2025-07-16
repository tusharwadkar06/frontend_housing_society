import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackgroundLayout from '../components/BackgroundLayout';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Visitors = ({ navigation }) => {
  const route = useRoute();
  const visitorData = route.params?.visitor;

  return (
    <BackgroundLayout
      blueHeight={80}
      showHeader={true}
      headerTitle="Visitors"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={true}
      searchData={[]}
      onSearchResults={() => {}}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        {!visitorData ? (
          <View style={styles.content}>
            <Image
              source={require('../assets/images/Visitoricon.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>No Visitor yet!</Text>
            <Text style={styles.subtitle}>
              No Visitor have been posted yet. Stay tuned{'\n'}for important updates
            </Text>
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Visitor Details</Text>
            {Object.entries(visitorData).map(([key, value]) => (
              <View key={key} style={styles.row}>
                <Text style={styles.label}>{key}:</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('newvisitor')}
      >
        <Icon name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </BackgroundLayout>
  );
};

export default Visitors;

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  image: {
    width: width * 0.55,
    height: width * 0.55,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#111',
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#FF7A00',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  label: {
    fontWeight: '600',
    color: '#444',
    fontSize: 14,
    flex: 1,
  },
  value: {
    color: '#007AFF',
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
  },
});
