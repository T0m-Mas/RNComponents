import React, {useCallback, useRef} from 'react';
import {
  FlatList,
  Image,
  Text,
  useWindowDimensions,
  View,
  ViewToken,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Slides} from '../data/SlideData';
import {primary, textColor} from '../theme/globals';
import {useState} from 'react';
export const SlideShowScreen = () => {
  const [index, setIndex] = useState(0);
  const {width, height} = useWindowDimensions();

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 1,
  };

  const onViewableItemsChanged = useCallback(
    (info: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      setIndex(info.viewableItems[0].index ?? -1);
    },
    [],
  );

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        key={'mainList'}
        data={Slides}
        disableIntervalMomentum={true}
        pagingEnabled={true}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: width * 0.8,
                  height: height * 0.3,
                }}>
                <Image
                  source={item.img}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'center',
                    marginBottom: 5,
                  }}
                />

                <Text
                  style={{
                    color: primary,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: textColor,
                  }}>
                  {item.desc}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.title}
        horizontal
      />
      <View
        style={{
          width,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 80,
        }}>
        {Slides.map((s, i) => {
          return (
            <Icon
              key={s.desc}
              name="ellipse"
              color={i === index ? primary : textColor}
              style={{paddingHorizontal: 5}}
              size={i === index ? 8 : 5}
            />
          );
        })}
      </View>
    </View>
  );
};
