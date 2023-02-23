import React, { useState } from 'react';
import { Image, ScrollView, Text, useDripsyTheme, View } from 'dripsy';
import { AnimatePresence, MotiView } from 'moti';
import { Button } from '../../components/Button';
import { images } from '../../lib/images/images';
import { Header } from '../../components/Header';

const Items = () => {
  const [visible, setVisible] = useState(false);

  const { theme } = useDripsyTheme();

  return (
    <ScrollView sx={{ flex: 1, backgroundColor: '$background' }}>
      <Header title="Аренда" />
      <View sx={{ paddingX: '$default' }}>
        <Button>
          <View
            sx={{
              width: '100%',
              height: 50,
              borderRadius: 10,
              justifyContent: 'space-between',
              paddingX: '$default',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text variant="link">Равлечения</Text>
            <Image
              source={images.arrowDown}
              style={{ tintColor: theme.colors.$link, width: 20, height: 20 }}
            />
          </View>
        </Button>
        <Button style={{ marginTop: theme.space.$default }}>
          <View
            sx={{
              width: '100%',
              height: 50,
              borderRadius: 10,
              justifyContent: 'space-between',
              paddingX: '$default',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text variant="link">Офисная техника</Text>
            <Image
              source={images.arrowDown}
              style={{ tintColor: theme.colors.$link, width: 20, height: 20 }}
            />
          </View>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Items;
