import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export default function PlayerBar(props) {
  return (
    <LinearGradient
      colors={['#240046', '#4B1183']}
      style={[styles.playerBar, styles.background]}
    >
      <View
        intensity={15}
        style={styles.elementsContainer}
      >
        <BlurView
          intensity={75}
          tint='dark'
          style={styles.songData}
        >
          <Pressable
            style={styles.album}
          >
            <View style={styles.cover} />
          </Pressable>
          <Pressable style={styles.songInfo}>
            <Text style={styles.title}>Kyle on Acid</Text>
            <Text style={styles.artist}>CLTX</Text>
          </Pressable>
          <BlurView
            intensity={5}
            tint='dark'
            style={{
              position: 'absolute',
              top: 0,
              width: '100%'
            }}
          />
        </BlurView>
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
        <View style={styles.progress}></View>
      </View>
      {/* <BlurView
        intensity={75}
        tint='dark'
        style={{
          flex: 1,
        }}
      /> */}
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
    backgroundColor: 'red',
    borderRadius: 10,
    height: 50,
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
    backgroundColor: 'black',
    borderRadius: 10,
    flex: .05
  },
  progress: {
    backgroundColor: 'green',
    borderRadius: 10,
    height: '100%',
    width: '33%'
  },
});