import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SearchType from '../SearchType/SearchType';

export default function SearchTypesFilter(props) {
  return (
    <LinearGradient
      colors={['#4B1183', '#240046']}
      style={styles.background}
    >
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
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    alignItems: 'center'
  }
})