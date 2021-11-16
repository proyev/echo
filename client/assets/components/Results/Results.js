import { LinearGradient } from 'expo-linear-gradient';

import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Pressable } from 'react-native';
import AlbumContent from '../AlbumContent/AlbumContent';

import Content from '../ArtistContent/ArtistContent';

export default function Results(props) {
  return (
    <View style={styles.container}>

      {
        props.type === 'smth' ?
          (
        <ImageBackground
          style={styles.artist}
          source={{
            uri: 'data:image/jpeg;base64,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'
          }}
        >
          <LinearGradient
            colors={['#3C096C', 'transparent']}
            style={{
              flex: .3
            }}
          />
          <View style={styles.artistContainer}>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistName}>
                CLTX
              </Text>
            </View>
            <View style={styles.sourceContainer}>
              <Image style={styles.source} />
            </View>
          </View>
          <LinearGradient
            colors={['transparent', '#3C096C']}
            style={{
              flex: .05
            }}
          />
        </ImageBackground>
          )
          : (
        <LinearGradient
          colors={['#3C096C', '#240046', '#10002B']}
          style={styles.artist}
        >
          <View style={styles.coverContainer}>
            <Image style={styles.cover} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Album/Playlist</Text>
            </View>
            <View style={styles.creatorContainer}>
              <Pressable style={styles.creatorImgContainer}>
                <Image style={styles.creatorImg} />
              </Pressable>
              <View style={styles.creatorNameContainer}>
                <Text style={styles.creatorName}>Artist</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
          )
      }

      <View style={styles.results}>
        {/* <Content /> */}
        <AlbumContent />
        <AlbumContent album={true} />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  artist: {
    flex: .4
  },
  artistContainer: {
    flex: .65,
    flexDirection: 'row',
    paddingHorizontal: '5%'
  },
  artistNameContainer: {
    flex: .8,
    justifyContent: 'flex-end'
  },
  artistName: {
    color: 'ghostwhite',
    fontSize: 36,
    fontWeight: 'bold'
  },
  sourceContainer: {
    alignItems: 'center',
    flex: .2,
    justifyContent: 'flex-end',
    paddingBottom: 2.5
  },
  source: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 36,
    width: 36
  },
  results: {
    flex: .6
  },

  coverContainer: {
    alignItems: 'center',
    flex: .75,
    justifyContent: 'center',
    paddingTop: 10
  },
  cover: {
    backgroundColor: 'blue',
    height: 175,
    width: 175
  },
  infoContainer: {
    flex: .25,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 5
  },
  nameContainer: {
    flex: .5,
    justifyContent: 'center'
  },
  name: {
    color: 'ghostwhite',
    fontWeight: 'bold',
    fontSize: 20
  },
  creatorContainer: {
    alignItems: 'center',
    flex: .5,
    flexDirection: 'row'
  },
  creatorImgContainer: {
    alignItems: 'center',
    flex: .1,
    justifyContent: 'center'
  },
  creatorImg: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: 24,
    width: 24
  },
  creatorNameContainer: {
    flex: .9,
    justifyContent: 'center'
  },
  creatorName: {
    color: 'ghostwhite',
    fontSize: 16
  }
});

{/*this part is for artist only*/}