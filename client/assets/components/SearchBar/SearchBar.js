import React from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../../icon/search2.png')}
        />
      </View>
      <TextInput
        placeholder='Search...'
        placeholderTextColor='ghostwhite'
        onChangeText={text => props.setInput(text)}
        style={styles.input}
        value={props.input}
        underlineColorAndroid='transparent'
      />
      {
        props.input ?
          <TouchableOpacity
            onPress={() => props.setInput('')}
            style={styles.iconContainer}
          >
            <Image
              style={styles.icon}
              source={require('../../icon/close2.png')}
            />
          </TouchableOpacity>
          : <View/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#3C096C',
    flex: .07,
    flexDirection: 'row',
    // opacity: .5,
  },
  iconContainer: {
    alignItems: 'center',
    flex: .2,
    justifyContent: 'center'
  },
  icon: {
    height: 24,
    width: 24,
    zIndex: 1
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'ghostwhite',
    flex: 1
  }
});