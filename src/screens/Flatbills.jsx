import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const tabs = ['Dues', 'History', 'Pay-List'];

const BillCard = ({ overdue }) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <Text style={styles.title}>Electricity</Text>
      <Text style={[styles.amount, { color: overdue ? 'red' : 'green' }]}>₹ 824</Text>
    </View>
    <Text style={styles.subtitle}>For the month of July 2025</Text>

    <View style={styles.row}>
      <View>
        <Text style={styles.dueDate}>Due date: 19 Sept 2024</Text>
        <Text style={styles.paid}>Partially paid: ₹ 824.25</Text>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </View>

    {overdue && <Text style={styles.overdue}>Overdue</Text>}
  </View>
);

const Flatbills= () => {
  const [activeTab, setActiveTab] = useState('Dues');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Total Dues</Text>
        <TouchableOpacity style={styles.payAll}>
          <Text style={styles.payAllText}>Pay all</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalDue}>₹ 43,821</Text>

      {/* Breakdown */}
      <View style={styles.breakdown}>
        <View style={styles.breakdownBox}>
          <Text style={styles.breakdownLabel}>Due payment</Text>
          <Text style={styles.breakdownValue}>₹ 40,244</Text>
        </View>
        <View style={styles.breakdownBox}>
          <Text style={styles.breakdownLabel}>Penalty charges</Text>
          <Text style={[styles.breakdownValue, { color: 'red' }]}>₹ 3824</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <BillCard overdue />
        <BillCard />
        <BillCard overdue />
        <BillCard />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.advanceText}>+ Pay advance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Flatbills;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fbff',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
  },
  titleText: {
    fontSize: 16,
    color: '#666',
  },
  totalDue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e53935',
    paddingHorizontal: width * 0.05,
  },
  payAll: {
    backgroundColor: '#1877f2',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  payAllText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  breakdown: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: width * 0.05,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  breakdownBox: {
    alignItems: 'center',
    flex: 1,
  },
  breakdownLabel: {
    color: '#888',
    fontSize: 12,
  },
  breakdownValue: {
    fontSize: 16,
    color: '#e53935',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: width * 0.05,
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
  },
  activeTab: {
    backgroundColor: '#1877f2',
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scroll: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: width * 0.05,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
    marginBottom: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  dueDate: {
    fontSize: 12,
    color: '#f90',
  },
  paid: {
    fontSize: 12,
    color: 'green',
    marginTop: 2,
  },
  overdue: {
    color: 'red',
    fontSize: 11,
    fontWeight: 'bold',
    position: 'absolute',
    right: 20,
    top: 45,
  },
  payButton: {
    borderColor: '#1877f2',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  payText: {
    color: '#1877f2',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  advanceText: {
    color: '#1877f2',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
