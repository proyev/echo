import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function SearchType(props) {
  const [active, setActive] = React.useState(false);

  return (
    <TouchableOpacity
      style={[styles.pill, active && styles.activePill]}
      onPress={() => setActive(!active)}
    >
      <Text style={styles.filter}>{props.type}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pill: {
    borderColor: '#E0AAFF',
    borderRadius: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 15,
  },
  activePill: {
    backgroundColor: '#0096C7',
    borderColor: '#00B4D8'
  },
  filter: {
    color: 'ghostwhite'
  }
})