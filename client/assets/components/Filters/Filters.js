import React from 'react';
import { View, StyleSheet } from 'react-native';

import SearchTypesFilter from '../SearchTypesFilter/SearchTypesFilter';

export default function Filters(props) {
  return (
    <View style={styles.container}>
      <SearchTypesFilter />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 500,
    width: '100%'
  }
})