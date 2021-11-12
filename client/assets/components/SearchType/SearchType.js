import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function SearchType(props) {
  const [active, setActive] = React.useState(false);

  return (
    <TouchableOpacity
      style={[styles.pill, active && styles.activePill]}
      onPress={() => !active ? setActive(true) : setActive(false)}
    >
      <View style={styles.innerPill}>
        <Text style={styles.filter}>{props.type}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pill: {
    borderColor: '#E0AAFF',
    borderRadius: 50,
    borderWidth: 2,
    marginHorizontal: '10%',
    width: 'auto'
  },
  activePill: {
    backgroundColor: '#0096C7',
    borderColor: '#00B4D8'
  },
  innerPill: {
    alignSelf: 'center',
    padding: 12
  },
  filter: {
    color: 'ghostwhite',
    margin: '10%'
  }
})