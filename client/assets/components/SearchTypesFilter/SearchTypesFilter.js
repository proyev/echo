import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SearchType from '../SearchType/SearchType';

export default function SearchTypesFilter(props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <SearchType type='Top' />
      <SearchType type='Artists' />
      <SearchType type='Songs' />
      <SearchType type='Albums' />
      <SearchType type='Albums' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
      <SearchType type='Playlists' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'grey'
  }
})