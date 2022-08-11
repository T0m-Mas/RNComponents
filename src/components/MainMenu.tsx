import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useContext} from 'react';
import {ThemeContext} from '../context/Theme/ThemeContex';

export interface MenuItem {
  name: string;
  icon: string;
  goto: string;
}
export interface Props {
  menuItems: MenuItem[];
}

export const MainMenu = ({menuItems}: Props) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {width} = useWindowDimensions();
  const renderMenuOption = ({name, icon, goto}: MenuItem) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate(goto as any);
        }}>
        <View
          style={{
            width: width * 0.85,
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            borderRadius: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderWidth: 0.7,
            borderColor: colors.primary,
            marginVertical: 5,
            overflow: 'hidden',
          }}>
          <View
            style={{
              width: '15%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={icon} size={25} color={colors.primary} />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: colors.text,
              width: '65%',
            }}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={menuItems}
      renderItem={({item}) => renderMenuOption(item)}
      keyExtractor={item => item.name}
      showsVerticalScrollIndicator={false}
    />
  );
};
