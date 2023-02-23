import { TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { Text, View } from 'dripsy';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
