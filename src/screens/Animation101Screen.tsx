import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {primary, textColor, ViewScreen} from '../theme/globals';

export const Animation101Screen = () => {
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
          <Animated.View style={{...styles.box, borderRadius}}>
            <Text style={styles.textbox}>{buttonText}</Text>
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
    color: textColor,
    fontSize: 15,
    fontWeight: '600',
  },
  box: {
    backgroundColor: primary,
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
