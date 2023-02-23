import {Text, TextInput, View} from 'dripsy';
import React from 'react';
import {TextInputProps} from 'react-native';

interface InputProps {
  label?: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  error?: string;
  disable?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    onChangeText,
    placeholder,
    value,
    label,
    keyboardType,
    secureTextEntry,
    error,
    disable,
  } = props;

  return (
    <View>
      {label ? <Text variant="label">{label}</Text> : null}
      <TextInput
        sx={{
          backgroundColor: '$secondary',
          width: '100%',
          borderRadius: 10,
          paddingX: '$default',
          alignItems: 'center',
          marginTop: '$default',
          borderColor: error ? '$error' : '$secondary',
          borderWidth: 1,
          height: 50,
        }}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry || false}
        placeholderTextColor="#C4C5C4"
        placeholder={placeholder}
        editable={disable || true}
      />
      {error ? (
        <Text variant="error" sx={{marginTop: 10}}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};
