import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {primary, textColor, ViewScreen} from '../theme/globals';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }, // Back to zero
      ).start();
    },
  });

  return (
    <View style={ViewScreen}>
      <View style={styles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
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
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
