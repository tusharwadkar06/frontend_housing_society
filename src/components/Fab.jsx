import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const Fab = ({
  onPress,
  iconName = 'add',
  iconSize = 28,
  iconColor = '#fff',
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.fab, style]} onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: width * 0.05, // 5% from right
    bottom: height * 0.03, // 3% from bottom
    width: width * 0.14,   // scale width (56px on ~400px screen)
    height: width * 0.14,
    backgroundColor: '#ff9100',
    borderRadius: (width * 0.14) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
    }),
  },
});

export default Fab;
