import {ScrollView, Text, View} from 'dripsy';
import React, {useEffect} from 'react';
import {MainCard} from './components/MainCard';
import {images} from '../../lib/images/images';
import {MeetingRoomsList} from './components/MeetingRoomsList';
import {TablesList} from './components/TablesList';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {init} from '../../redux/Actions/appActions';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },
});

const Home = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user.user);

  const infoCountTablesAndRooms = useAppSelector(
    state => state.data.infoCountTablesAndRooms,
  );

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  const meetingRooms = useAppSelector(state => state.data.meetingRooms)?.slice(
    0,
    5,
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView sx={styles.wrapper}>
        <Text variant="title" sx={{paddingX: '$default'}}>
          Привет, {user?.firstName} {user?.lastName} 👋
        </Text>
        <View
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingX: '$default',
          }}>
          <MainCard
            color="$primary"
            value={infoCountTablesAndRooms?.countFreeSeats || 0}
            text="Мест"
            icon={images.home}
          />
          <View sx={{width: 10}} />
          <MainCard
            color="$primary"
            value={infoCountTablesAndRooms?.countFreeRooms || 0}
            text="Офисы"
            icon={images.home}
          />
        </View>

        <View sx={{marginTop: 30}}>
          <Text variant="homeCardTitle" sx={{paddingX: '$default'}}>
            Переговорки
          </Text>
          <View sx={{marginTop: 20}}>
            <MeetingRoomsList meetingRooms={meetingRooms} />
          </View>
        </View>
        <View sx={{marginTop: 30, paddingX: '$default'}}>
          <Text variant="homeCardTitle">Столы</Text>
          <View sx={{marginTop: 20}}>
            <TablesList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
