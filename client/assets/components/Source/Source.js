import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function Source(props) {
  const [active, setActive] = React.useState(true);

  return (
    <TouchableOpacity
      onPress={() => setActive(!active)}
      style={styles.bubble}
    >
      <Image
        style={[styles.icon, !active && styles.inactive]}
        source={
          active ?
            require('../../icon/spotify_active.png')
            : require('../../icon/spotify_inactive.png')
        }
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bubble: {
    marginHorizontal: 8
  },
  inactive: {
    borderColor: '#E0AAFF'
  },
  icon: {
    borderColor: '#00B4D8',
    borderRadius: 25,
    borderWidth: 1,
    height: 36,
    width: 36
  }
});