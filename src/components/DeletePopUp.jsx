import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const DeletePopUp = ({ visible, onConfirm, onCancel, navigation }) => {
  const slideAnim = useRef(new Animated.Value(-height)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  const handleClose = () => {
    onCancel(); // optional if you still need to update parent state
    navigation.goBack(); // 👈 navigate back
  };

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.overlay}>
        <Animated.View style={[styles.popupContainer, { transform: [{ translateY: slideAnim }] }]}>
          <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <Image
            source={require('../assets/images/DeletePopUp.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.message}>
            Once you delete this, it will be permanently{'\n'}removed from your device
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.deleteBtn} onPress={onConfirm}>
              <Text style={styles.deleteText}>Delete</Text>
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={handleClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 2,
  },
  closeText: {
    fontSize: 18,
    color: '#999',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginBottom: 15,
  },
  message: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  deleteBtn: {
    flex: 1,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 6,
    marginRight: 5,
    alignItems: 'center',
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#E6F0FF',
    paddingVertical: 12,
    borderRadius: 6,
    marginLeft: 5,
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelText: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DeletePopUp;
