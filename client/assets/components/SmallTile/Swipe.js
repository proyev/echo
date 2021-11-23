import React from 'react';
import { View, Img, StyleSheet } from 'react-native';

export default function Swipe({ direction, size }) {

  return (
    <View style={[
      styles.container,
      {width: `${size}%`},
      size > 25 && (direction === 'right' ? {backgroundColor: 'green'} : {backgroundColor: 'red'})
      ]}>
      <Img
        source={direction === 'right' ? require() : require()}
        style={styles.img}
      />
    </View>
  )
}

const styles = StyleSheet(creat({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  img: {
    height: 48,
    width: 48
  }
}))