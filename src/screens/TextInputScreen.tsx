import React, {useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/Theme/ThemeContex';
import {useForm} from '../hooks/useForm';
import {ViewScreen, TextTitle} from '../styles/globals';

export const TextInputScreen = () => {
  const {
    theme: {
      colors: {primary, text, inactive},
    },
  } = useContext(ThemeContext);
  const {name, email, number, onChange} = useForm({
    name: '',
    email: '',
    number: '',
  });

  return (
    <View style={ViewScreen}>
      <HeaderTitle
        title="TextInputs"
        subtitle="for input the text... like a text input"
      />
      <View style={container}>
        <ScrollView>
          <View style={{marginVertical: 20}}>
            <Text style={{...TextTitle, color: text}}>{name}</Text>
            <Text style={{...TextTitle, color: text}}>{email}</Text>
            <Text style={{...TextTitle, color: text}}>{number}</Text>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <View>
              <TextInput
                style={{...input, borderColor: primary, color: text}}
                placeholderTextColor={inactive}
                placeholder="Give me your name..."
                autoCapitalize={'words'}
                autoCorrect={false}
                onChangeText={e => onChange('name', e)}
              />
              <TextInput
                style={{...input, borderColor: primary, color: text}}
                placeholderTextColor={inactive}
                placeholder="...your email..."
                autoComplete={'email'}
                autoCorrect={false}
                autoCapitalize={'none'}
                keyboardType="email-address"
                onChangeText={e => onChange('email', e)}
              />
              <TextInput
                style={{...input, borderColor: primary, color: text}}
                placeholderTextColor={inactive}
                placeholder="...and your telephone number."
                keyboardType={'number-pad'}
                onChangeText={e => onChange('number', e)}
              />
              <View style={{height: 100}} />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

const {container, input} = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 0.5,
  },
});
