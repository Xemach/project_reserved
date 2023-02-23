import React, { useCallback } from 'react';
import { Image, ScrollView, Text, View } from 'dripsy';
import { Header } from '../../components/Header';
import { useAppSelector } from '../../redux/store';

const Profile = () => {
  const user = useAppSelector(state => state.user.user);

  const renderField = useCallback((label: string, text: string) => {
    return (
      <View sx={{ marginBottom: '$default' }}>
        <Text variant="title">{label}</Text>
        <Text
          variant="tableCard"
          sx={{
            paddingX: '$default',
            paddingY: 10,
            borderRadius: 10,
            borderWidth: 1,
            marginTop: 10,
          }}>
          {text}
        </Text>
      </View>
    );
  }, []);

  return (
    <ScrollView sx={{ flex: 1, backgroundColor: '$background' }}>
      <Header title="Профиль" />
      <Image
        source={{
          uri: user?.avatar || '',
        }}
        sx={{ width: '100%', height: 300 }}
      />
      <View sx={{ paddingX: '$default', marginTop: '$default' }}>
        {renderField(
          'Имя',
          `${user?.firstName} ${user?.lastName} ${user?.patronymic}`,
        )}
        {renderField('Телефон', `${user?.phone}`)}
        {renderField('Почта', `${user?.email}`)}
        {renderField('Тариф', `${user?.tariff.name}`)}
      </View>
    </ScrollView>
  );
};

export default Profile;
