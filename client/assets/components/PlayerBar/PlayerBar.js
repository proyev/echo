import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function PlayerBar(props) {
  return (
    <LinearGradient
      colors={['#10002B', '#240046', '#3C096C']}
      style={[styles.playerBar, styles.background]}
    >
    <View style={styles.elementsContainer}>
      <Pressable
        style={styles.album}
      >
        <Image
          style={styles.cover}
          source={{
            uri: 'data:image/jpeg;base64,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'
          }}
        />
      </Pressable>
      <Pressable style={styles.songInfo}>
        <Text style={styles.title}>Kylie On Acid</Text>
        <Text style={styles.artist}>CLTX</Text>
      </Pressable>
      <TouchableOpacity
        style={styles.iconContainer}
      >
        <Image
          style={styles.icon}
          source={require('../../icon/like_i.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
      >
        <Image
          style={styles.icon}
          source={require('../../icon/pause_sm.png')}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.statusBar}>
      <View style={styles.progress}>
        <LinearGradient
          colors={['#240046', '#1DB954']}
          end={{
            x: 1,
            y: 0
          }}
          start={{
            x: 0,
            y: 0
          }}
          style={{
            flex: 1,
            borderRadius: 10
          }}
        />
      </View>
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  playerBar: {
    // backgroundColor: '#240046',
    //remove height later on
    paddingHorizontal: '2.5%',
    paddingTop: '2.5%',
    height: 75,
    width: '100%'
  },
  background: {
    // height: '100%',
    // width: '100%'
    // position: 'absolute',
  },
  elementsContainer: {
    flex: .95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 24,
    width: 24
  },
  iconContainer: {
    alignItems: 'flex-start',
    flex: .1,
  },
  songData: {
    color: 'ghostwhite',
    justifyContent: 'center',
    flex: .8,
    flexDirection: 'row'
  },
  album: {
    flex: .2,
    justifyContent: 'center'
  },
  cover: {
    borderRadius: 10,
    elevation: 10,
    height: 50,
    shadowColor: '#C77DFF',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: .35,
    shadowRadius: 6.5,
    width: 50
  },
  songInfo: {
    flex: .8,
    justifyContent: 'center',
  },
  title: {
    color: 'ghostwhite',
    flex: .35,
    fontWeight: 'bold',
  },
  artist: {
    color: 'lightgrey',
    flex: .35
  },
  statusBar: {
    backgroundColor: '#240046',
    borderRadius: 10,
    flex: .05
  },
  progress: {
    height: '100%',
    width: '33%'
  },
});