import React from 'react';
import {Button, Modal, View, Text, TouchableOpacity} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ViewScreen, textColor, primary, background} from '../theme/globals';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={ViewScreen}>
      <HeaderTitle title="Modal" />
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
            <Text style={{color: textColor}}>This is a custom modal</Text>
            <Text style={{color: textColor}}>press ok to continue</Text>
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
