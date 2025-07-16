import React, { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
} from 'react-native';

const PopUp = ({ visible, onClose, children }) => {
  const slideAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      slideAnim.setValue(-500); // reset when hidden
    }
  }, [visible, slideAnim]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.overlay}>
        <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
          {/* Your custom content below */}
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    maxHeight: '85%',
    elevation: 5,
   height: '60%',
  },
  closeBtn: {
    alignSelf: 'flex-end',
  },
  closeIcon: {
    fontSize: 22,
  },
});
