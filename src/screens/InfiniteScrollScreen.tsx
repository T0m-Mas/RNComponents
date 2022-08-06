import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const imagesToLoad = 5;
  const {width} = useWindowDimensions();

  const load = () => {
    let moreData: string[] = [];
    for (let i = 0; i < imagesToLoad; i++) {
      moreData.push(
        `https://picsum.photos/seed/${Math.random()}/${width / 2}/${(
          Math.random() * (160 - 100) +
          100
        ).toFixed()}`,
      );
    }
    return moreData;
  };
  const [data, setData] = useState<string[][]>([load(), load(), load()]);

  return (
    <View style={screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScrollEndDrag={() =>
          setData([
            [...data[0], ...load()],
            [...data[1], ...load()],
            [...data[2], ...load()],
          ])
        }>
        <View style={{margin: 5, marginBottom: 10}}>
          <HeaderTitle
            title="Infinite Scroll"
            subtitle="an infinite srolling posibilities"
          />
        </View>
        <View style={row}>
          {data.map((item, i) => {
            return (
              <View style={{width: width / 3}} key={'col' + i}>
                {item.map(subitem => {
                  return (
                    <Image
                      key={subitem}
                      source={{uri: subitem}}
                      style={{
                        width: '100%',
                        height: parseInt(
                          subitem.slice(subitem.length - 3, subitem.length),
                        ),
                      }}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const {screen, row} = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  screen: {
    flex: 1,
  },
});
