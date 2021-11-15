import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, TouchableOpacity, Pressable, Text, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import SearchBar from './assets/components/SearchBar/SearchBar';
import Filters from './assets/components/Filters/Filters';
import PlayerBar from './assets/components/PlayerBar/PlayerBar';
import Artist from './assets/components/Artist/Artist';
import Player from './assets/components/Player/Player';

export default function App() {
  const [input, setInput] = React.useState('');
  //when keyboard pops up everything shrinks => solve
  return (
    // <KeyboardAvoidingView
    //   behavior='height'
    //   keyboardVerticalOffset={-250} //try adjusting this one
    //   style={styles.container}
    // >
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#10002B', '#240046']}
      >
        <StatusBar
          backgroundColor='transparent'
          style='light'
          translucent={true}
        />
      </LinearGradient>
      {/* <Player /> */}

      <PlayerBar />
      <SearchBar
        input={input}
        setInput={setInput}
      />
      {
        input ? <Filters />
        : <View />
      }
      <Artist />
    </SafeAreaView>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10002B',
    flex: 1
  }
});
