// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import BackgroundLayout from '../components/BackgroundLayout';
// import Footer from '../components/Footer';

// const data = [
//   { flat: 'A-101', status: 'Self Occupied', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
//   { flat: 'A-102', status: 'Rented', residents: [{ name: 'Priyanka Gupta', type: 'Tenant', phone: '91+ 1234567899' }] },
//   { flat: 'A-103', status: 'Vacant', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
//   { flat: 'A-104', status: 'Self Occupied', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
//   { flat: 'A-105', status: 'Self Occupied', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
//   { flat: 'A-106', status: 'Rented', residents: [{ name: 'Priyanka Gupta', type: 'Tenant', phone: '91+ 1234567899' }] },
//   { flat: 'B-101', status: 'Vacant', residents: [{ name: 'Priyanka Gupta', type: 'Owner', phone: '91+ 1234567899' }] },
// ];

// const SocietyFlats = ({ navigation }) => {
//   const [activeTab, setActiveTab] = useState('home');
//   const [filteredData, setFilteredData] = useState(data);

//   return (
//     <BackgroundLayout
//       blueHeight={80}
//       showHeader={true}
//       headerTitle="Society Flats"
//       onBack={() => navigation.goBack()}
//       onNotification={() => {}}
//       showBadge={true}
//       searchData={data}
//       onSearchResults={(results) => setFilteredData(results)} 
//     >
//       <ScrollView
//         contentContainerStyle={styles.scroll}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         {filteredData.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.card}
//             onPress={() => navigation.navigate('viewFlat', { flatData: item })}
//           >
//             <View style={styles.cardHeader}>
//               <Text style={styles.flat}>{item.flat}</Text>
//               <View style={styles.iconRow}>
//                 <TouchableOpacity style={styles.iconWrapper}>
//                   <Image source={require('../assets/societyflats/mail.png')} style={styles.iconImage} />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.iconWrapper}>
//                   <Image source={require('../assets/societyflats/mail.png')} style={styles.iconImage} />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.iconWrapper}>
//                   <Image source={require('../assets/societyflats/message.png')} style={styles.iconImage} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <Text style={styles.status}>{item.status}</Text>
//             {item.residents.map((r) => (
//               <View key={r.name} style={styles.row}>
//                 <Text style={styles.name}>
//                   {r.name} ({r.type})
//                 </Text>
//                 <Text style={styles.phone}>{r.phone}</Text>
//               </View>
//             ))}
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <Footer activeTab={activeTab} onTabPress={(tab) => setActiveTab(tab)} />
//     </BackgroundLayout>
//   );
// };

// export default SocietyFlats;

// const styles = StyleSheet.create({
//   scroll: {
//     padding: 2,
//     paddingBottom: 24,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 8,
//     elevation: 1,
//     width: '100%'
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   flat: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#1E1E1E',
//   },
//   status: {
//     marginTop: 4,
//     fontSize: 13,
//     color: '#777',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 2,
//   },
//   name: {
//     fontSize: 13,
//     color: '#444',
//   },
//   phone: {
//     fontSize: 13,
//     color: '#777',
//   },
//   iconRow: {
//     flexDirection: 'row',
//     columnGap: 10,
//   },
//   iconWrapper: {
//     width: 35,
//     height: 35,
//     borderRadius: 17,
//     padding: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconImage: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//   },
// });



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import BackgroundLayout from '../components/BackgroundLayout';
// import Footer from '../components/Footer';
// import { SocietyFlatsApi } from '../api/APICall';

// const SocietyFlats = ({ navigation }) => {
//   const [activeTab, setActiveTab] = useState('home');
//   const [filteredData, setFilteredData] = useState([]);
//   const [originalData, setOriginalData] = useState([]);

//   const fetchFlats = async () => {
//     try {
//       const response = await SocietyFlatsApi();

//       if (response.status === true) {
//         setOriginalData(response.data || []);
//         setFilteredData(response.data || []);
//       } else {
//         console.error('API Error:', response.message || 'No error message provided');
//         console.log('Full API response:', response); // Optional debugging log
//         setOriginalData([]);
//         setFilteredData([]);
//       }
//     } catch (error) {
//       console.error('Failed to fetch flats:', error);
//       setOriginalData([]);
//       setFilteredData([]);
//     }
//   };

//   useEffect(() => {
//     fetchFlats();
//   }, []);

//   return (
//     <BackgroundLayout
//       blueHeight={80}
//       showHeader={true}
//       headerTitle="Society Flats"
//       onBack={() => navigation.goBack()}
//       onNotification={() => {}}
//       showBadge={true}
//       searchData={originalData}
//       onSearchResults={(results) => setFilteredData(results)}
//     >
//       <ScrollView
//         contentContainerStyle={styles.scroll}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         {filteredData.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.card}
//             onPress={() => navigation.navigate('viewFlat', { flatData: item })}
//           >
//             <View style={styles.cardHeader}>
//               <Text style={styles.flat}>{item.flat}</Text>
//               <View style={styles.iconRow}>
//                 <TouchableOpacity style={styles.iconWrapper}>
//                   <Image source={require('../assets/societyflats/mail.png')} style={styles.iconImage} />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.iconWrapper}>
//                   <Image source={require('../assets/societyflats/mail.png')} style={styles.iconImage} />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.iconWrapper}>
//                   <Image source={require('../assets/societyflats/message.png')} style={styles.iconImage} />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <Text style={styles.status}>{item.status}</Text>

//             {item.residents?.map((r, rIndex) => (
//               <View key={rIndex} style={styles.row}>
//                 <Text style={styles.name}>
//                   {r.name} ({r.type})
//                 </Text>
//                 <Text style={styles.phone}>{r.phone}</Text>
//               </View>
//             ))}
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <Footer activeTab={activeTab} onTabPress={(tab) => setActiveTab(tab)} />
//     </BackgroundLayout>
//   );
// };

// export default SocietyFlats;

// const styles = StyleSheet.create({
//   scroll: {
//     padding: 2,
//     paddingBottom: 24,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 8,
//     elevation: 1,
//     width: '100%',
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   flat: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#1E1E1E',
//   },
//   status: {
//     marginTop: 4,
//     fontSize: 13,
//     color: '#777',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 2,
//   },
//   name: {
//     fontSize: 13,
//     color: '#444',
//   },
//   phone: {
//     fontSize: 13,
//     color: '#777',
//   },
//   iconRow: {
//     flexDirection: 'row',
//     columnGap: 10,
//   },
//   iconWrapper: {
//     width: 35,
//     height: 35,
//     borderRadius: 17,
//     padding: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconImage: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//   },
// });




//Api Added this code
 import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';
import Footer from '../components/Footer';
import { SocietyFlatsApi } from '../api/APICall';

const SocietyFlats = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchFlats = async () => {
    try {
      const response = await SocietyFlatsApi();

      if (response.Success === true) {
        const result = response.Message || [];
        setOriginalData(result);
        setFilteredData(result);
        setErrorMsg('');
      } else {
        setErrorMsg('Failed to fetch data.');
        setOriginalData([]);
        setFilteredData([]);
      }
    } catch (error) {
      setErrorMsg('Something went wrong. Please try again later.');
      setOriginalData([]);
      setFilteredData([]);
    }
  };

  useEffect(() => {
    fetchFlats();
  }, []);

  return (
    <BackgroundLayout
      blueHeight={80}
      showHeader={true}
      headerTitle="Society Flats"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={true}
      searchData={originalData}
      onSearchResults={(results) => setFilteredData(results)}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* 🔴 Show error message with Retry */}
        {errorMsg !== '' && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMsg}</Text>
            <TouchableOpacity onPress={fetchFlats} style={styles.retryButton}>
              <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Flats Data List */}
        {filteredData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('viewFlat', { flatData: item })}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.flat}>
                Tower {item.towerno || '-'} - Flat {item.flatno || '-'}
              </Text>
              <View style={styles.iconRow}>
                <TouchableOpacity style={styles.iconWrapper}>
                  <Image
                    source={require('../assets/societyflats/mail.png')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper}>
                  <Image
                    source={require('../assets/societyflats/mail.png')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper}>
                  <Image
                    source={require('../assets/societyflats/message.png')}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.status}>{item.email}</Text>

            <View style={styles.row}>
              <Text style={styles.name}>{item.descn}</Text>
              <Text style={styles.phone}>{item.mobile}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Footer activeTab={activeTab} onTabPress={(tab) => setActiveTab(tab)} />
    </BackgroundLayout>
  );
};

export default SocietyFlats;

const styles = StyleSheet.create({
  scroll: {
    padding: 2,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    elevation: 1,
    width: '100%',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flat: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1E1E1E',
  },
  status: {
    marginTop: 4,
    fontSize: 13,
    color: '#777',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  name: {
    fontSize: 13,
    color: '#444',
  },
  phone: {
    fontSize: 13,
    color: '#777',
  },
  iconRow: {
    flexDirection: 'row',
    columnGap: 10,
  },
  iconWrapper: {
    width: 35,
    height: 35,
    borderRadius: 17,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  // Error + Retry styles
  errorContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 6,
  },
  retryButton: {
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  retryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
