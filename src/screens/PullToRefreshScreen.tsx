import React, {useContext} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {TextTitle, ViewScreen} from '../styles/globals';
import {useState} from 'react';
import {ThemeContext} from '../context/Theme/ThemeContex';

export const PullToRefreshScreen = () => {
  const {
    theme: {
      colors: {text},
    },
  } = useContext(ThemeContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setData('Lock & Load!');
      setLoading(false);
    }, 5000);
  };

  return (
    <View style={ViewScreen}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={onRefresh}
            colors={['red', 'orange', 'yellow', 'green', 'blue', 'purple']}
            style={{opacity: 0}}
            progressViewOffset={100}
          />
        }>
        <HeaderTitle
          title="Pull to Refresh"
          subtitle="you have to PULL to REFRESH"
        />
        {!loading && (
          <View
            style={{
              marginTop: 200,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...TextTitle, color: text}}> {data} </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
