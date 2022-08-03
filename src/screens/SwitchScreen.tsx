import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {inactiveColor, primary, ViewScreen, TextNormal} from '../theme/globals';

export const SwitchScreen = () => {
  const [{active, hungry, happy}, setState] = useState({
    active: true,
    hungry: false,
    happy: true,
  });

  const handleChange = (
    value: boolean,
    field: 'active' | 'hungry' | 'happy',
  ) => {
    setState({active, hungry, happy, [field]: value});
  };

  return (
    <View style={ViewScreen}>
      <HeaderTitle
        title="Switches"
        subtitle="On/Off, 0 or 1, that sort of things"
      />
      <View style={style.switchRow}>
        <Text style={TextNormal}>is Active</Text>
        <CustomSwitch
          value={active}
          onChange={e => {
            handleChange(e, 'active');
          }}
        />
      </View>
      <View style={style.switchRow}>
        <Text style={TextNormal}>is Hungry</Text>
        <CustomSwitch
          value={hungry}
          onChange={e => {
            handleChange(e, 'hungry');
          }}
        />
      </View>
      <View style={style.switchRow}>
        <Text style={TextNormal}>is Happy</Text>
        <CustomSwitch
          value={happy}
          onChange={e => {
            handleChange(e, 'happy');
          }}
        />
      </View>
      <View style={style.stateView}>
        <Icon
          name="power"
          size={120}
          color={active ? primary : inactiveColor}
        />
        <Icon
          name="fast-food-outline"
          size={120}
          color={hungry ? primary : inactiveColor}
        />
        <Icon
          name="happy-outline"
          size={120}
          color={happy ? primary : inactiveColor}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  switchRow: {
    marginVertical: 2,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stateView: {
    display: 'flex',
    flex: 1,
    margin: 10,
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
