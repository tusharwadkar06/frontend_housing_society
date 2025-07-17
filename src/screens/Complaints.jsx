

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import BackgroundLayout from '../components/BackgroundLayout';



// const dummyComplaints = [
//   {
//     id: '#124568',
//     title: 'Water Pipe Leakage',
//     date: '06 July 2025',
//     created: '17 Jun 2025',
//     updated: '17 Jun 2025',
//     status: 'Open',
//     user: 'Aditya',
//     flat: 'A-101',
//     // image: require('../assets/images/pipe.png'),
//   },
//   {
//     id: '#124569',
//     title: 'AC Repairing Services',
//     date: '06 July 2025',
//     created: '17 Jun 2025',
//     updated: '17 Jun 2025',
//     status: 'Resolved',
//     user: 'Aditya',
//     flat: 'B-901',
//     // image: require('../assets/images/ac.png'),
//   },
//   {
//     id: '#124570',
//     title: 'Electricity Wire Cut',
//     date: '06 July 2025',
//     created: '17 Jun 2025',
//     updated: '17 Jun 2025',
//     status: 'In Progress',
//     user: 'Aditya',
//     flat: 'C-804',
//     // image: require('../assets/images/wire.png'),
//   },
// ];

// const Complaints = ({ navigation }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <BackgroundLayout
//       blueHeight={210}
//       showHeader={true}
//       headerTitle="Complaints"
//       onBack={() => navigation.goBack()}
//       onNotification={() => {}}
//       showBadge={false}
//     >
//       <View style={styles.pageWrapper}>
//         {/* + New Complaints Button */}
//         <View style={styles.buttonWrapper}>
//           <TouchableOpacity
//             style={styles.newComplaintBtn}
//             onPress={() => navigation.navigate('NewComplaintForm')}
//           >
//             <Text style={styles.newComplaintText}>+ New Complaints</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Statistics */}
//         <Text style={styles.statTitle}>Last 90 Days</Text>
//         <View style={styles.statRow}>
//           {['114 Total', '16 InProgress', '68 Open', '26 Closed'].map((stat, idx) => (
//             <View key={idx} style={styles.statBox}>
//               <Text style={styles.statNumber}>{stat.split(' ')[0]}</Text>
//               <Text style={styles.statLabel}>{stat.split(' ')[1]}</Text>
//             </View>
//           ))}
//         </View>

//         {/* Section Title */}
//         <Text style={styles.sectionTitle}>Recent Notices</Text>

//         {/* Complaints List */}
//         <ScrollView style={styles.list}>
//           {dummyComplaints.map((item, index) => (
//             <View key={index} style={styles.card}>
//               <View style={styles.rowBetween}>
//                 <Text style={styles.statusLabel(item.status)}>{item.status}</Text>
//                 <Text style={styles.flatTag}>{item.flat}</Text>
//               </View>

//               <Text style={styles.id}>ID: {item.id}</Text>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.date}>
//                 Last Update: {item.updated}, Created: {item.created}
//               </Text>

//               <View style={styles.rowBetween}>
//                 <View style={styles.row}>
//                   <Image
//                     // source={require('../assets/images/user.png')}
//                     style={styles.userIcon}
//                   />
//                   <View>
//                     <Text style={styles.username}>{item.user}</Text>
//                     <Text style={styles.time}>02 hrs ago</Text>
//                   </View>
//                 </View>

//                 <TouchableOpacity onPress={() => setSelectedImage(item.image)}>
//                   <Image source={item.image} style={styles.thumbnail} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Fullscreen Image Modal */}
//       <Modal visible={!!selectedImage} transparent>
//         <TouchableOpacity
//           style={styles.fullscreenOverlay}
//           onPress={() => setSelectedImage(null)}
//         >
//           <Image source={selectedImage} style={styles.fullscreenImage} />
//         </TouchableOpacity>
//       </Modal>
//     </BackgroundLayout>
//   );
// };

// export default Complaints;
// const styles = StyleSheet.create({
//   pageWrapper: {
//     flex: 1,
//     paddingHorizontal: 2,
    
//   },
//   buttonWrapper: {
//     marginTop: -150,
//   },
//   newComplaintBtn: {
//     backgroundColor: '#0039A9',
//     padding: 8,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   newComplaintText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   statTitle: {
//     marginTop:4,
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 12,
//     color: 'white',
//   },
//   statRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
   
//   },
//   statBox: {
//     backgroundColor: '#b5e4fe',
//     padding: 5,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: 83, 
//   },
//   statNumber: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#0032ac',
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#0032ac',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 16,
//     color: '#222',
//     marginLeft: 8,
//   },
//   list: {
//     paddingHorizontal: 4,
//     marginBottom: 80,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 12,
//     marginBottom: 12,
//     elevation: 2,
//   },
//   rowBetween: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   statusLabel: (status) => ({
//     fontSize: 13,
//     fontWeight: '600',
//     color:
//       status === 'Resolved'
//         ? 'green'
//         : status === 'Open'
//         ? 'orange'
//         : '#007BFF',
//   }),
//   flatTag: {
//     backgroundColor: '#EAF2FF',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//     fontSize: 12,
//     color: '#0039A9',
//   },
//   id: {
//     fontSize: 12,
//     color: '#555',
//     marginTop: 4,
//   },
//   title: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#222',
//     marginVertical: 4,
//   },
//   date: {
//     fontSize: 12,
//     color: '#888',
//     marginBottom: 8,
//   },
//   userIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#ccc',
//   },
//   username: {
//     fontSize: 13,
//     fontWeight: 'bold',
//   },
//   time: {
//     fontSize: 11,
//     color: '#999',
//   },
//   thumbnail: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     backgroundColor: '#eee',
//   },
//   fullscreenOverlay: {
//     flex: 1,
//     backgroundColor: '#000000cc',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullscreenImage: {
//     width: '90%',
//     height: '70%',
//     resizeMode: 'contain',
//   },
// });





import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';

const dummyComplaints = [
  {
    id: '#124568',
    title: 'Water Pipe Leakage',
    date: '06 July 2025',
    created: '17 Jun 2025',
    updated: '17 Jun 2025',
    status: 'Open',
    user: 'Aditya',
    flat: 'A-101',
  },
  {
    id: '#124569',
    title: 'AC Repairing Services',
    date: '06 July 2025',
    created: '17 Jun 2025',
    updated: '17 Jun 2025',
    status: 'Resolved',
    user: 'Aditya',
    flat: 'B-901',
  },
  {
    id: '#124570',
    title: 'Electricity Wire Cut',
    date: '06 July 2025',
    created: '17 Jun 2025',
    updated: '17 Jun 2025',
    status: 'In Progress',
    user: 'Aditya',
    flat: 'C-804',
  },
];

const Complaints = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <BackgroundLayout
      blueHeight={210}
      showHeader={true}
      headerTitle="Complaints"
      onBack={() => navigation.goBack()}
      onNotification={() => {}}
      showBadge={false}
    >
      <View style={styles.pageWrapper}>
        {/* + New Complaints Button */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.newComplaintBtn}
            onPress={() => navigation.navigate('NewComplaintForm')}
          >
            <Text style={styles.newComplaintText}>+ New Complaints</Text>
          </TouchableOpacity>
        </View>

        {/* Statistics */}
        <Text style={styles.statTitle}>Last 90 Days</Text>
        <View style={styles.statRow}>
          {['114 Total', '16 InProgress', '68 Open', '26 Closed'].map((stat, idx) => (
            <View key={idx} style={styles.statBox}>
              <Text style={styles.statNumber}>{stat.split(' ')[0]}</Text>
              <Text style={styles.statLabel}>{stat.split(' ')[1]}</Text>
            </View>
          ))}
        </View>

        {/* Section Title */}
       <View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>Recent Notices</Text>
  <TouchableOpacity onPress={() => console.log('View All Pressed')}>
    <Text style={styles.viewAll}>View All</Text>
  </TouchableOpacity>
</View>


        {/* Complaints List */}
        <ScrollView style={styles.list}>
          {dummyComplaints.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.rowBetween}>
                <Text style={styles.statusLabel(item.status)}>{item.status}</Text>
                <Text style={styles.flatTag}>{item.flat}</Text>
              </View>

              <Text style={styles.id}>ID: {item.id}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>
                Last Update: {item.updated}, Created: {item.created}
              </Text>

              <View style={styles.rowBetween}>
                <View style={styles.row}>
                  <Image
                    source={require('../assets/images/human.png')}
                    style={styles.userIcon}
                  />
                  <View>
                    <Text style={styles.username}>{item.user}</Text>
                    <Text style={styles.time}>02 hrs ago</Text>
                  </View>
                </View>

                <TouchableOpacity onPress={() => setSelectedImage(item.image)}>
                  <Image source={item.image} style={styles.thumbnail} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* Fullscreen Image Modal */}
      <Modal visible={!!selectedImage} transparent>
        <TouchableOpacity
          style={styles.fullscreenOverlay}
          onPress={() => setSelectedImage(null)}
        >
          <Image source={selectedImage} style={styles.fullscreenImage} />
        </TouchableOpacity>
      </Modal>
    </BackgroundLayout>
  );
};

export default Complaints;

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingBottom: 100,
  },
  buttonWrapper: {
    marginTop: -155,
    marginBottom: 16,
  },
  newComplaintBtn: {
    backgroundColor: '#0039A9',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  newComplaintText: {
    color: '#fff',
    fontWeight: '600',
  },
  statTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: 'white',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statBox: {
    backgroundColor: '#b5e4fe',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 83,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0032ac',
  },
  statLabel: {
    fontSize: 12,
    color: '#0032ac',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#222',
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusLabel: (status) => ({
    fontSize: 13,
    fontWeight: '600',
    color:
      status === 'Resolved'
        ? 'green'
        : status === 'Open'
        ? 'orange'
        : '#007BFF',
  }),
  flatTag: {
    backgroundColor: '#EAF2FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    color: '#0039A9',
  },
  id: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  userIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ccc',
  },
  username: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 11,
    color: '#999',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  fullscreenOverlay: {
    flex: 1,
    backgroundColor: '#000000cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
  sectionHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  
  paddingHorizontal: 4,
},

viewAll: {
  fontSize: 13,
  color: '#0039A9',
  fontWeight: '600',
},

});
