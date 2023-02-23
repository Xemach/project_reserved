import {Image, ScrollView, Text, View} from 'dripsy';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Header} from '../../components/Header';
import {images} from '../../lib/images/images';
import {useAppNavigation} from '../../lib/hooks';
import {PrimaryButton} from '../../components/PrimaryButton';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackType} from '../../navigation/types';
import {parseImageLink} from '../../lib/parsers/parseImageLink';
import {useAppDispatch} from '../../redux/store';
import {getDetailItem} from '../../redux/Actions/dataActions';
import {Detail} from '../../lib/types';
import BottomSheet, {TouchableOpacity} from '@gorhom/bottom-sheet';
import DatePicker from 'react-native-date-picker';
import {DateTime} from 'luxon';
import {SafeAreaView} from 'react-native-safe-area-context';

interface DatePickerProps {
  datetime: Date;
  onChange: (date: string) => void;
  placeholder: string;
  mode: 'date' | 'time' | 'datetime';
}

const DatePickerCustom = (props: DatePickerProps) => {
  const [open, setOpen] = useState(false);

  const {datetime, onChange, placeholder, mode} = props;

  const onChangeDate = useCallback(
    (date: Date) => {
      setOpen(false);
      onChange(DateTime.fromJSDate(date).toISODate());
    },
    [onChange],
  );

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text>{placeholder}</Text>
      </TouchableOpacity>
      <DatePicker
        mode={mode}
        locale="ru"
        title={mode === 'date' ? 'Выберите дату' : 'Выберите время'}
        cancelText="ОТМЕНА"
        confirmText="ВЫБРАТЬ"
        modal
        open={open}
        date={datetime}
        onConfirm={date => onChangeDate(date)}
        onCancel={() => {
          setOpen(false);
        }}
        minimumDate={DateTime.now().toJSDate()}
        maximumDate={DateTime.now().plus({days: 14}).toJSDate()}
      />
    </View>
  );
};

export const DetailsScreen = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [data, setData] = useState<Detail | null>(null);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const route = useRoute<RouteProp<MainStackType, 'details'>>();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%'], []);

  const {id, type} = route.params;

  useEffect(() => {
    dispatch(getDetailItem(id, type)).then(res => {
      if (res) {
        setData(res);
      }
    });
  }, [dispatch, id, type]);

  const navigateReserve = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const [date, setDate] = useState('2017-05-15T09:10:23');
  const [startTime, setStartTime] = useState('2017-05-15T09:10:23');
  const [endTime, setEndTime] = useState('2017-05-15T09:10:23');

  console.log(date);

  const formatDate = (dateProp: string) => {
    return DateTime.fromISO(dateProp).setLocale('ru').toFormat('dd MMMM');
  };

  const formatTime = (dateProp: string) => {
    return DateTime.fromISO(dateProp).setLocale('ru').toFormat('T');
  };

  return (
    <SafeAreaView>
      <ScrollView sx={{backgroundColor: '$background'}}>
        <Header
          title={data?.title}
          left={{source: images.arrowLeft, onPress: goBack}}
        />
        <View sx={{height: 400, width: '100%'}}>
          <Image
            sx={{width: '100%', height: '100%'}}
            source={{
              uri: parseImageLink(
                `${data?.images ? data.images[0] : ''}`,
                type,
              ),
            }}
            resizeMode="cover"
          />
        </View>
        <View sx={{paddingX: '$default', marginTop: 20}}>
          <Text variant="title">{data?.title}</Text>
        </View>
        <View sx={{paddingX: '$default', marginTop: 10}}>
          <Text variant="subtitle">Кол-во мест: {data?.numberSeats}</Text>
        </View>
        <View sx={{paddingX: '$default', marginTop: 20}}>
          <Text sx={{fontSize: '$4'}}>Описание</Text>
        </View>
        <View sx={{marginTop: 20, paddingX: '$default'}}>
          <Text variant="p">{data?.description}</Text>
        </View>
        <View sx={{paddingX: '$default', marginTop: 20}}>
          <PrimaryButton onPress={navigateReserve} text="Забронировать место" />
        </View>
      </ScrollView>
      <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}>
        <View sx={{flex: 1, padding: '$default'}}>
          <DatePickerCustom
            mode="date"
            datetime={DateTime.fromISO(date).toJSDate()}
            placeholder={date ? formatDate(date) : 'Выберите дату'}
            onChange={setDate}
          />
          <DatePickerCustom
            mode="time"
            datetime={DateTime.fromISO(startTime).toJSDate()}
            placeholder={date ? formatTime(startTime) : 'Выберите дату'}
            onChange={setStartTime}
          />
          <DatePickerCustom
            mode="time"
            datetime={DateTime.fromISO(endTime).toJSDate()}
            placeholder={date ? formatTime(endTime) : 'Выберите дату'}
            onChange={setEndTime}
          />
          <PrimaryButton onPress={() => null} text="Забронировать" />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};
