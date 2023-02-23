import React from 'react';
import { View, Text, Image, useDripsyTheme } from 'dripsy';
import { useCallback } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { images } from '../../../lib/images/images';
import { useAppNavigation } from '../../../lib/hooks';
import { useAppSelector } from '../../../redux/store';
import { Detail } from '../../../lib/types';

export const TablesList = () => {
  const { theme } = useDripsyTheme();
  const navigation = useAppNavigation();

  const tables = useAppSelector(state => state.data.tables);

  const navigateToDetails = useCallback(
    (id: number) => () => {
      navigation.navigate('details', { id, type: 'table' });
    },
    [navigation],
  );

  const renderTable = useCallback(
    ({ item }: { item: Detail }) => {
      return (
        <View
          sx={{
            width: '100%',
          }}>
          <TouchableOpacity onPress={navigateToDetails(item.id)}>
            <View
              sx={{
                borderWidth: 1,
                borderRadius: 10,
                paddingX: '$3',
                paddingY: '$2',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text variant="tableCard">{item?.title}</Text>
              <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text variant="link">Забронировать</Text>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: theme.colors.$link,
                  }}
                  source={images.arrowTable}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    },
    [navigateToDetails, theme.colors.$link],
  );

  return (
    <FlatList
      data={tables}
      style={{ flex: 1 }}
      renderItem={renderTable}
      ItemSeparatorComponent={() => <View sx={{ height: 10 }} />}
    />
  );
};
