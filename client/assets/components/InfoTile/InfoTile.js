import React from 'react';
import { Image, View, TouchableOpacity, Pressable, StyleSheet, Text } from 'react-native';

export default function InfoTile(props) {
  return (
    <View style={styles.tile}>
      <TouchableOpacity style={styles.innerTile}>
        <Pressable style={styles.imgContainer}>
          <Image style={[styles.img, styles.songImg]} />
        </Pressable>
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Name</Text>
          </View>
          <View style={styles.metaContainer}>
            <Text style={styles.meta}>Artist</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image
          source={require('../../icon/artist.png')}
          style={styles.button}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image
          source={require('../../icon/like_i.png')}
          style={styles.button}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#10002B',
    flexDirection: 'row',
    height: 60,
    width: '100%'
  },
  innerTile: {
    flex: .8,
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  imgContainer: {
    alignItems: 'center',
    flex: .2,
    justifyContent: 'center'
  },
  img: {
    backgroundColor: 'white',
    height: 46,
    width: 46
  },
  artistImg: {
    borderRadius: 23,
  },
  songImg: {
    borderRadius: 10
  },
  infoContainer: {
    flex: .6,
  },
  nameContainer: {
    flex: .5,
    justifyContent: 'flex-end',
    paddingHorizontal: 5
  },
  name: {
    color: 'ghostwhite',
    fontWeight: 'bold'
  },
  metaContainer: {
    flex: .5,
    justifyContent: 'flex-start',
    paddingHorizontal: 5
  },
  meta: {
    color: 'ghostwhite'
  },
  buttonContainer: {
    alignItems: 'center',
    flex: .1,
    justifyContent: 'center',
    marginRight: 10
  },
  button: {
    height: 24,
    width: 24
  }
});