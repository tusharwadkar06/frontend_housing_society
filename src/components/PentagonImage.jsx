import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Svg, {
  Defs,
  ClipPath,
  Path,
  Image as SvgImage,
} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';


const size = 320;
const height = 220;

const PentagonImage = () => {
  const navigation = useNavigation();

  const path = `
   
  M ${size / 2},60
  Q ${size * 0.75},0 ${size},60
  L ${size},${height}
  L 0,${height}
  L 0,30
  Q ${size * 0.25},0 ${size / 2},4
  Z
`;


  return (
    <View style={styles.wrapper}>
      <Svg width={size} height={height} style={styles.svg}>
        <Defs>
          <ClipPath id="clip">
            <Path d={path} />
          </ClipPath>
        </Defs>
        <SvgImage
           href={require('../assets/images/building.png')}
          width={size}
          height={height}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clip)"
        />
      </Svg>

      <View style={styles.infoContainer}>
        {[
          { label: 'Flats', value: '80', onPress: () => navigation.navigate('SocietyFlats') },
          { label: 'Members', value: '60' },
          { label: 'Tenants', value: '20' },
        ].map((item, index) => (
          <View key={index} style={styles.infoCard}>
            {item.onPress ? (
              <TouchableOpacity onPress={item.onPress}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </TouchableOpacity>
            ) : (
              <>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  svg: {
    position: 'relative',
  },
  infoContainer: {
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 120,
    gap: 10,
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 80,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PentagonImage;