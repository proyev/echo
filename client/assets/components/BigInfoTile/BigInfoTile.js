import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export default function BigInfoTile(props) {


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innerContainer}>
        <View style={styles.imgContainer}>
          <Image style={[styles.img]} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Name</Text>
          </View>
          <View style={styles.yearContainer}>
            <Text style={styles.year}>2021</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 185,
    marginHorizontal: 10,
    marginVertical: 5,
    width: 145
  },
  innerContainer: {
    flex: 1
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 145,
    width: 145
  },
  img: {
    backgroundColor: 'white',
    height: 145,
    width: 145
  },
  artistImg: {
    borderRadius: 75
  },
  infoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 3
  },
  nameContainer: {
    flex: .5
  },
  name: {
    color: 'ghostwhite',
    fontWeight: 'bold'
  },
  yearContainer: {
    flex: .5
  },
  year: {
    color: 'ghostwhite'
  }
});