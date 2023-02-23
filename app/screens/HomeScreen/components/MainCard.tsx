import React from 'react';
import { Image, Text, View } from 'dripsy';
import { ImageSourcePropType } from 'react-native';

interface MainCardProps {
  text: string;
  value: number;
  icon: ImageSourcePropType;
  color: string;
}

export const MainCard = (props: MainCardProps) => {
  const { text, icon, color, value } = props;
  return (
    <View
      sx={{
        backgroundColor: color,
        flex: 1,
        borderRadius: 10,
        padding: '$default',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image sx={{ width: 30, height: 30 }} source={icon} />
      <View sx={{ marginLeft: 10 }}>
        <Text variant="mainCard" sx={{ fontSize: '$5' }}>
          {value}
        </Text>
        <Text variant="mainCard">{text}</Text>
      </View>
    </View>
  );
};
