import React, {useContext} from 'react';
import {Button, Modal, View, Text, TouchableOpacity} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ViewScreen} from '../styles/globals';
import {useState} from 'react';
import {ThemeContext} from '../context/Theme/ThemeContex';

export const ModalScreen = () => {
  const {
    theme: {
      colors: {primary, text, background},
    },
  } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={ViewScreen}>
      <HeaderTitle
        title="Custom Modal"
        subtitle="just a normal modal... but with style"
      />
      <View style={{height: 50}} />
      <Button
        title="Open Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <Modal transparent visible={isVisible} animationType="fade">
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              width: 230,
              height: 150,
              borderWidth: 0.5,
              borderColor: primary,
              backgroundColor: background,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: text}}>This is a custom modal</Text>
            <Text style={{color: text}}>press ok to continue</Text>
            <TouchableOpacity
              style={{marginTop: 20, padding: 10}}
              onPress={() => setIsVisible(false)}>
              <Text style={{color: primary}}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
