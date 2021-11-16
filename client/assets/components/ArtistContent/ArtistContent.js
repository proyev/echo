import React from 'react';
import { SectionList, Text, StyleSheet, FlatList, View } from 'react-native';

import InfoTile from '../InfoTile/InfoTile';
import BigInfoTile from '../BigInfoTile/BigInfoTile';

export default function Content(props) {
  //prop.type -> artist and so on...

  return (
    <SectionList
      stickySectionHeadersEnabled={false}
      sections={SECTIONS}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ index, section }) => (
        <View>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>{section.section}</Text>
          </View>
          {
            section.section !== 'Popular' &&
            <FlatList
              horizontal
              contentContainerStyle={{alignItems: 'center'}}
              data={section.data}
              renderItem={({ index }) => <BigInfoTile key={index} />}
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalSection}
            />
          }
        </View>
      )}
      renderItem={({ index, section }) => (
        section.section === 'Popular' && <InfoTile key={index} />
      )}
    >
    </SectionList>
  )

}

const styles = StyleSheet.create({
  sectionTitleContainer: {
    justifyContent: 'center',
    height: 45,
    paddingHorizontal: 10,
    width: '100%'
  },
  sectionTitle: {
    color: 'ghostwhite',
    fontSize: 18,
    fontWeight: 'bold'
  },
  horizontalSection: {
    height: 220,
  }
});

const SECTIONS = [
  {
    section: 'Popular',
    data: [
      {
        title: 'Gimme Some Love',
      },
      {
        title: 'Gimme Some Love',
      },
      {
        title: 'Gimme Some Love',
      },
      {
        title: 'Gimme Some Love',
      },
      {
        title: 'Gimme Some Love',
      },
      {
        title: 'Gimme Some Love',
      }
    ]
  },
  {
    section: 'Discography',
    data: [
      {
        title: 'Boombox Bangers',
        type: 'Single',
        year: 2020
      },
      {
        title: 'Boombox Bangers',
        type: 'Single',
        year: 2020
      },
      {
        title: 'Boombox Bangers',
        type: 'Single',
        year: 2020
      },
      {
        title: 'Boombox Bangers',
        type: 'Single',
        year: 2020
      },
      {
        title: 'Boombox Bangers',
        type: 'Single',
        year: 2020
      }
    ]
  },
  {
    section: 'Featuring',
    data: [
      {
        title: 'Vizionn Radio',
        descrition: 'LISTEN'
      },
      {
        title: 'Vizionn Radio',
        descrition: 'LISTEN'
      },
      {
        title: 'Vizionn Radio',
        descrition: 'LISTEN'
      },
      {
        title: 'Vizionn Radio',
        descrition: 'LISTEN'
      },
      {
        title: 'Vizionn Radio',
        descrition: 'LISTEN'
      }
    ]
  },
  {
    section: 'Playlists',
    data: [
      {
        name: 'Techno Alarm'
      },
      {
        name: 'Techno Alarm'
      },
      {
        name: 'Techno Alarm'
      },
      {
        name: 'Techno Alarm'
      },
      {
        name: 'Techno Alarm'
      }
    ]
  },
  {
    section: 'Fans also like',
    data: [
      {
        name: 'CLTX'
      },
      {
        name: 'CLTX'
      },
      {
        name: 'CLTX'
      },
      {
        name: 'CLTX'
      },
      {
        name: 'CLTX'
      },
      {
        name: 'CLTX'
      }
    ]
  },
  {
    section: 'Appears on',
    data: [
      {
        name: 'Boiler Room Live'
      },
      {
        name: 'Boiler Room Live'
      },
      {
        name: 'Boiler Room Live'
      }
    ]
  }
]