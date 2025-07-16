import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const NoticeCard = ({ backgroundImage, title, description, author, meta }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.noticeCard}
      imageStyle={styles.noticeCardImage}
    >
      <View style={styles.noticeOverlay}>
        <Text style={styles.noticeTitle}>{title}</Text>
        <Text style={styles.noticeDesc}>
          {description}
          <Text style={{ color: '#007BFF', fontWeight: '500' }}> read more</Text>
        </Text>
        <View style={styles.noticeFooter}>
          <Text style={styles.noticeAuthor}>{author}</Text>
          <Text style={styles.noticeMeta}>{meta}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default NoticeCard;

const styles = StyleSheet.create({
  noticeCard: {
    width: 314,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',

    // Border
    borderWidth: 1,
    borderColor: '#ddd',

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 4,
  },

  noticeCardImage: {
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    width: '70%', // 👈 covers ~70% background
    height: '100%',
    position: 'absolute',
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  noticeOverlay: {
    flex: 1,
    marginLeft: '32%', // 👈 push content rightward to avoid image
    padding: 8,
    justifyContent: 'center',
  },

  noticeTitle: {
    fontSize: 17,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#333',
  },

  noticeDesc: {
    fontSize: 13,
    color: '#555',
    marginVertical: 4,
  },

  noticeFooter: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 4,
  },

  noticeAuthor: {
    fontWeight: 'bold',
    color: '#333',
  },

  noticeMeta: {
    fontSize: 12,
    color: '#666',
  },
});
