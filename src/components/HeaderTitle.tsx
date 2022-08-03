import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextTitle, TextSubTitle} from '../theme/globals';

export const HeaderTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={TextTitle}>{title}</Text>
      {subtitle && <Text style={TextSubTitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
