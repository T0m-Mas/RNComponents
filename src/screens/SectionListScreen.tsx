import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {Countries} from '../data/World';
import {
  background,
  TextSubTitle,
  TextTitle,
  ViewScreen,
} from '../theme/globals';

export const SectionListScreen = () => {
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
          <Text style={{...TextSubTitle, fontSize: 15}}>{item}</Text>
        )}
        renderSectionHeader={({section}) => (
          <View style={{paddingVertical: 8, backgroundColor: background}}>
            <Text style={TextTitle}>{section.continent}</Text>
          </View>
        )}
        stickySectionHeadersEnabled
      />
    </View>
  );
};
