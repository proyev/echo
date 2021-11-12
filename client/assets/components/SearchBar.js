import React from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../icon/search2.png')}
        />
      </View>
      <TextInput
        value={props.input}
        placeholder="Search..."
        style={styles.input}
        onChangeText={text => props.setInput(text)}
      />
      {
        props.input ?
          <TouchableOpacity
            onPress={() => props.setInput('')}
            style={styles.iconContainer}
          >
            <Image
              style={styles.icon}
              source={require('../icon/close2.png')}
            />
          </TouchableOpacity>
          : <View/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //fixed height for now
    alignItems: 'center',
    backgroundColor: 'green',
    flexDirection: 'row',
    height: 80,
    //width remove later when all the elements are present
    width: '100%'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 0.2,
    justifyContent: 'center'
  },
  icon: {
    height: 24,
    width: 24
  },
  input: {
    flex: 1,
    backgroundColor: 'blue'
  }
});