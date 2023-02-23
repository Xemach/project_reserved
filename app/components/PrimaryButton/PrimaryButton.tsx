import { Text, View } from 'dripsy';
import { TouchableOpacity } from 'react-native';
import React from 'react';

interface ButtonProps {
  onPress: () => void;
  color?: string;
  text: string;
  marginTop?: number;
}

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ width: '100%', height: 50, marginTop: props.marginTop || 20 }}>
      <View
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: props.color || '$primary',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text variant="buttonText">{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
