import { View } from 'dripsy';
import React, { useCallback } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { parseImageLink } from '../../../lib/parsers/parseImageLink';
import { MeetingRoom } from '../../../lib/types';
import { useAppNavigation } from '../../../lib/hooks';

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 200,
  },
  image: {
    borderRadius: 10,
  },
});

interface MeetingRoomsListProps {
  meetingRooms: MeetingRoom[] | undefined;
}

export const MeetingRoomsList = (props: MeetingRoomsListProps) => {
  const { meetingRooms } = props;

  const navigation = useAppNavigation();

  const navigateToMeetingRoom = useCallback(
    (item: MeetingRoom) => () => {
      navigation.navigate('details', { id: item.id, type: 'room' });
    },
    [navigation],
  );

  const renderMeetingRoom = useCallback(
    (item: { item: MeetingRoom }) => {
      return (
        <TouchableOpacity onPress={navigateToMeetingRoom(item.item)}>
          <ImageBackground
            style={styles.wrapper}
            imageStyle={styles.image}
            source={{
              uri: parseImageLink(
                `${item.item.images ? item.item.images[0] : ''}`,
                'room',
              ),
            }}>
            <View
              sx={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                padding: '$default',
              }}
            />
          </ImageBackground>
        </TouchableOpacity>
      );
    },
    [navigateToMeetingRoom],
  );

  return (
    <FlatList
      horizontal
      data={meetingRooms}
      renderItem={renderMeetingRoom}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
    />
  );
};
