import React from 'react';
import Animated, {useCode, cond, eq, set, add} from 'react-native-reanimated';
import { Image, View, TouchableOpacity, Pressable, StyleSheet, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Swipe from './Swipe';

export default function SmallTile({ type='albumContent', data }) {

  Animated.useCode(() => [
    cond(eq(State.BEGAN, State.ACTIVE), set(translateX, add(offsetX, )))
  ])

  return (
    <View style={styles.tile}>
      <Animated.View
        style={{
          transform: [
            {
              translateX:
            }
          ]
        }}
      >
        <PanGestureHandler>
          <Swipe
            direction='right'/>

        </PanGestureHandler>
      </Animated.View>
      <TouchableOpacity
        style={styles.innerTile}
        onPress={() => alert('Open/Play smth')}
      >
        {
          type !== 'albumContent' && (
            <Pressable
              disabled={type !== 'song'}
              style={styles.imgContainer}
              onPress={() => alert('Open album')}
            >
              <Image style={[styles.img,
                (type === 'playlist' || type === 'album') && styles.playlistImg,
                type === 'artist' && styles.artistImg
              ]} />
            </Pressable>
          )
        }
        <View style={[styles.infoContainer,
            (type === 'artist' || type === 'albumContent') && {flex: .8}]}>
          <View style={[styles.nameContainer,
            (type === 'artist' || type === 'playlist') && styles.artistStyle]}
          >
            <Text style={styles.name}>Name</Text>
          </View>
          {
            type !== 'playlist' && type !== 'artist' && (
              <View style={styles.metaContainer}>
                <Text style={styles.meta}>Artist</Text>
              </View>
            )
          }
        </View>
      </TouchableOpacity>
      {
        type !== 'artist' && (
          <>
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
          </>
        )
      }
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
    borderRadius: 10,
    height: 46,
    width: 46
  },
  artistImg: {
    borderRadius: 23,
  },
  playlistImg: {
    borderRadius: 0
  },
  infoContainer: {
    flex: .6,
  },
  nameContainer: {
    flex: .5,
    justifyContent: 'flex-end',
    paddingHorizontal: 5
  },
  artistStyle: {
    flex: 1,
    justifyContent: 'center'
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