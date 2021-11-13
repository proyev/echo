import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';

import SearchBar from './assets/components/SearchBar/SearchBar';
import Filters from './assets/components/Filters/Filters';
import PlayerBar from './assets/components/PlayerBar/PlayerBar';

export default function App() {
  const [input, setInput] = React.useState('');
  //when keyboard pops up everything shrinks => solve
  return (
    <KeyboardAvoidingView
      behavior='height'
      style={styles.container}
    >
      <View style={{
        flex: 1
      }}>
        <PlayerBar />
        <SearchBar
          input={input}
          setInput={setInput}
        />
        {
          input ?
            <Filters />
            : <KeyboardAvoidingView />
        }
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10002B'
  },
});
