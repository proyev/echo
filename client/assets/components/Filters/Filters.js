import React from 'react';
import { View, StyleSheet } from 'react-native';

import SearchTypesFilter from '../SearchTypesFilter/SearchTypesFilter';
import SourcesFilter from '../SourcesFilter/SourcesFilter';

export default function Filters(props) {
  return (
    <View style={styles.container}>
      <View style={styles.sourcesFilter}>
        <SourcesFilter />
      </View>
      <View style={styles.searchTypesFilter}>
        <SearchTypesFilter />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .13
  },
  sourcesFilter: {
    flex: .6
  },
  searchTypesFilter: {
    flex: .4
  }
})