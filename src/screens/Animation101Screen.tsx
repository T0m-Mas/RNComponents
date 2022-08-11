import React, {useContext, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../context/Theme/ThemeContex';
import {ViewScreen} from '../styles/globals';

export const Animation101Screen = () => {
  const {
    theme: {
      colors: {primary, text},
    },
  } = useContext(ThemeContext);

  const borderRadius = useRef(new Animated.Value(0)).current;
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Touch Me');
  const [square, setSquare] = useState(false);

  const goRound = () => {
    setDisabled(true);
    if (square) {
      setButtonText('ARRGGGHH!');
      Animated.timing(borderRadius, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setButtonText('Touch Me');
        setSquare(!square);
        setDisabled(false);
      });
    } else {
      setButtonText('UUURRRGHH!');
      Animated.timing(borderRadius, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setButtonText('Touch Me');
        setSquare(!square);
        setDisabled(false);
      });
    }
  };

  return (
    <View style={ViewScreen}>
      <View style={styles.container}>
        <TouchableOpacity onPress={goRound} disabled={disabled}>
          <Animated.View
            style={{...styles.box, borderRadius, backgroundColor: primary}}>
            <Text style={{...styles.textbox, color: text}}>{buttonText}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    fontSize: 15,
    fontWeight: '600',
  },
  box: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
