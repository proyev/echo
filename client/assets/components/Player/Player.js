import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Pressable, Text } from 'react-native';

export default function Player(props) {

  return (
    <View>
      <LinearGradient
          colors={['#10002B', '#240046', '#3C096C']}
          style={styles.header}
        >
          <View style={styles.headerIconContainer}>
            <TouchableOpacity style={styles.headerIcon}>
              <Image
                style={styles.headerIcon}
                source={require('../../icon/up.png')}
              />
            </TouchableOpacity>
          </View>
          <Pressable style={styles.sourceInfo}>
            <View style={styles.sourceNameContainer}>
              <Text style={styles.sourceName}>Tales of Lost Raves</Text>
            </View>
            <View
              style={styles.sourceMetaContainer}
            >
              <Text style={styles.sourceMeta}>Single · 2021</Text>
            </View>
          </Pressable>
          <View styles={styles.headerIconContainer} />
        </LinearGradient>

        <View style={styles.coverContainer}>
          <ImageBackground
            resizeMode='cover'
            source={{
              uri: 'https://f4.bcbits.com/img/a0089405395_10.jpg'
            }}
            style={{
              flex: 1
            }}
          >
            <LinearGradient
              colors={['#3C096C', 'transparent']}
              style={{
                flex: .15
              }}
            />
            <View
              style={{
                flex: .7,
              }}
            />
            <LinearGradient
              colors={['transparent', '#3C096C']}
              style={{
                flex: .15
              }}
            />
          </ImageBackground>
        </View>

      <LinearGradient
      colors={['#3C096C', '#240046', '#10002B']}
      style={styles.player}
      >
        <View style={styles.trackInfo}>
          <View style={styles.buttonContainer} />
          <View style={styles.songData}>
            <Pressable style={styles.songNameContainer}>
              <Text style={styles.songName}>Kylie On Acid</Text>
            </Pressable>
            <Pressable style={styles.artistContainer}>
              <Text style={styles.artist}>CLTX</Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('../../icon/like_i.png')}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.playbackInfoContainer}>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
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
                style={styles.status}
              />
            </View>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.timecodeContainer}>
              <Text style={styles.timecode}>2:01</Text>
            </View>
            <View style={styles.durationContainer}>
              <View style={styles.duration}>
                <Text style={styles.duration}>6:00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.controlPanel}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('../../icon/shuffle.png')}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.trackControlButton}>
              <Image
                source={require('../../icon/prev.png')}
                style={styles.trackControlButton}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.playButton}>
              <Image
                source={require('../../icon/pause_b.png')}
                style={styles.playButton}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.trackControlButton}>
              <Image
                source={require('../../icon/next.png')}
                style={styles.trackControlButton}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('../../icon/repeat.png')}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.placeholderCP} />
      </LinearGradient>

    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flex: .1
  },
  headerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: .15,
  },
  headerIcon: {
    height: 24,
    width: 24
  },
  sourceInfo: {
    flex: .7
  },
  sourceNameContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: .5
  },
  sourceName: {
    color: 'ghostwhite',
    fontWeight: 'bold'
  },
  sourceMetaContainer: {
    alignItems: 'center',
    flex: .5
  },
  sourceMeta: {
    color: 'ghostwhite'
  },
  coverContainer: {
    flex: .5
  },
  player: {
    flex: .4
  },
  trackInfo: {
    flex: .25,
    flexDirection: 'row',
  },
  songData: {
    flex: .6
  },
  songNameContainer: {
    alignItems: 'center',
    flex: .55,
    justifyContent: 'flex-end'
  },
  songName: {
    color: 'ghostwhite',
    fontWeight: 'bold'
  },
  artistContainer: {
    alignItems: 'center',
    flex: .45,
    justifyContent: 'flex-start'
  },
  artist: {
    color: 'ghostwhite'
  },
  playbackInfoContainer: {
    flex: .15
  },
  progressBarContainer: {
    flex: .1,
    paddingHorizontal: '6%',
  },
  progressBar: {
    backgroundColor: '#240046',
    borderRadius: 10,
    height: '100%',
    width: '100%'
  },
  status: {
    borderRadius: 10,
    height: '100%',
    width: '33%'
  },
  timeContainer: {
    alignItems: 'flex-start',
    flex: .9,
    flexDirection: 'row',
    paddingHorizontal: '6%'
  },
  timecodeContainer: {
    flex: .5
  },
  timecode: {
    color: 'ghostwhite'
  },
  durationContainer: {
    alignItems: 'flex-end',
    flex: .5,
  },
  duration: {
    color: 'ghostwhite'
  },
  controlPanel: {
    alignItems: 'center',
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    flex: .2,
    justifyContent: 'center'
  },
  button: {
    height: 24,
    width: 24
  },
  trackControlButton: {
    height: 36,
    width: 36
  },
  playButton: {
    height: 48,
    width: 48
  },
  placeholderCP: {
    flex: .3,
  }
});