import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/Theme/ThemeContex';
import {Countries} from '../data/World';
import {TextSubTitle, TextTitle, ViewScreen} from '../styles/globals';

export const SectionListScreen = () => {
  const {
    theme: {
      colors: {background, text},
    },
  } = useContext(ThemeContext);
  return (
    <View style={ViewScreen}>
      <SectionList
        sections={Countries.sort((a, b) =>
          a.continent > b.continent ? 1 : -1,
        )}
        ListHeaderComponent={
          <HeaderTitle title="SectionList" subtitle="Continentes y países" />
        }
        keyExtractor={(a, b) => a + b}
        renderItem={({item}) => (
          <Text style={{...TextSubTitle, fontSize: 15, color: text}}>
            {item}
          </Text>
        )}
        renderSectionHeader={({section}) => (
          <View style={{paddingVertical: 8, backgroundColor: background}}>
            <Text style={{...TextTitle, color: text}}>{section.continent}</Text>
          </View>
        )}
        stickySectionHeadersEnabled
      />
    </View>
  );
};
