import React from 'react';
import { View, Text, Image } from 'dripsy';
import { images } from '../../lib/images/images';
import { Button } from '../Button';
import { ImageURISource } from 'react-native';

interface ButtonsHeader {
  source: ImageURISource;
  onPress: () => void;
}

interface HeaderProps {
  title?: string;
  left?: ButtonsHeader;
  right?: ButtonsHeader;
}

export const Header = (props: HeaderProps) => {
  const { title, left, right } = props;
  return (
    <View
      sx={{
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: '$default',
      }}>
      <View sx={{ width: 0 }}>
        {left ? (
          <Button
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={left.onPress}>
            <View
              sx={{
                width: 24,
                height: 24,
              }}>
              <Image
                sx={{ width: '100%', height: '100%' }}
                resizeMode="contain"
                source={images.arrowLeft}
              />
            </View>
          </Button>
        ) : null}
      </View>
      {title ? (
        <Text variant="header">{title}</Text>
      ) : (
        <View sx={{ width: 0 }} />
      )}
      <View sx={{ width: 0 }}>
        {right ? (
          <Button
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              sx={{
                width: 24,
                height: 24,
              }}>
              <Image
                sx={{ width: '100%', height: '100%' }}
                resizeMode="contain"
                source={images.arrowLeft}
              />
            </View>
          </Button>
        ) : null}
      </View>
    </View>
  );
};
