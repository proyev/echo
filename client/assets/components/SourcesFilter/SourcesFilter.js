import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Source from '../Source/Source';

export default function SourcesFilter(props) {

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Source />
      <Source />
      <Source />
      <Source />
      <Source />
      <Source />
      <Source />
      <Source />
      <Source />
      <Source />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#4B1183'
  }
});