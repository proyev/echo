import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import SearchType from '../SearchType/SearchType';

export default function SearchTypesFilter(props) {
  return (
    <View style={styles.container}>
      <ScrollView
        fadingEdgeLength={1}
        horizontal={true}
      >
        <SearchType type='Top' />
        <SearchType type='Artists' />
        <SearchType type='Songs' />
        <SearchType type='Albums' />
        <SearchType type='Playlists' />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '80%'
  }
})