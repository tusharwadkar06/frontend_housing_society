import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Calendar = ({ navigation }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const calendarData = [
    ['31', '30', '1', '2', '3', '4', '5'],
    ['6', '7', '8', '9', '10', '11', '12'],
    ['13', '14', '15', '16', '17', '18', '19'],
    ['20', '21', '22', '23', '24', '25', '26'],
    ['27', '28', '29', '30', '31', '1', '2'],
  ];
  const redDays = ['2', '17', '18', '30', '31'];

  const handleClose = () => {
    navigation.goBack(); 
  };
  return (
    <View style={{
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 12,
      margin: 10,
      alignItems: 'center',
      elevation: 10,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginBottom: 10,
      }}>
        <TouchableOpacity><Text style={{ fontSize: 24, color: '#007BFF' }}>{'‹'}</Text></TouchableOpacity>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>September</Text>
          <Text style={{ fontSize: 14, color: '#555', textAlign: 'center' }}>2025</Text>
        </View>
        <TouchableOpacity><Text style={{ fontSize: 24, color: '#007BFF' }}>{'›'}</Text></TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 8 }}>
        {daysOfWeek.map(day => (
          <Text key={day} style={{ fontSize: 14, fontWeight: '600', color: '#999', width: 32, textAlign: 'center' }}>{day}</Text>
        ))}
      </View>

      {calendarData.map((week, i) => (
        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 6 }}>
          {week.map((date, j) => {
            const isRed = redDays.includes(date);
            return (
              <View
                key={j}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 44,
                  padding: 2,
                  backgroundColor: isRed ? '#FF3B30' : 'transparent',
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: '600', color: isRed ? '#fff' : '#000' }}>{date}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 2 }}>
                  <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#00C853', marginHorizontal: 1 }} />
                  <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#6200EA', marginHorizontal: 1 }} />
                  <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#2962FF', marginHorizontal: 1 }} />
                </View>
              </View>
            );
          })}
        </View>
      ))}

      <Text style={{ marginTop: 12, fontWeight: '600', fontSize: 16, color: '#000' }}>September 2025</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, width: '90%' }}>
        <View style={{ borderWidth: 1, borderColor: '#007BFF', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10 }}>
          <Text style={{ color: '#007BFF', fontWeight: '600' }}>Present 27 days</Text>
        </View>
        <View style={{ backgroundColor: '#FF3B30', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Leave 5 days</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleClose} style={{ marginTop: 10 }}>
        <Text style={{ color: '#007BFF' }}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calendar;
