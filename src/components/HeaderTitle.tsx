import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../context/Theme/ThemeContex';

export const HeaderTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  const {
    theme: {
      colors: {text},
    },
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={{...styles.title, color: text}}>{title}</Text>
      {subtitle && (
        <Text style={{...styles.subtitle, color: text}}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.8,
    fontWeight: 'normal',
  },
});
