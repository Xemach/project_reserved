import React, { useCallback } from 'react';
import { ScrollView, Text, View } from 'dripsy';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useAppNavigation } from '../../lib/hooks';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  RegisterInputSchema,
  schemaRegister,
} from '../../lib/validation/registerSchema';
import { useAppDispatch } from '../../redux/store';
import { register } from '../../redux/Actions/userActions';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputSchema>({
    reValidateMode: 'onChange',
    resolver: yupResolver(schemaRegister),
  });

  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const navigateToLogin = useCallback(() => {
    navigation.navigate('login');
  }, [navigation]);

  const registerUser = useCallback(
    (data: RegisterInputSchema) => {
      dispatch(register(data));
    },
    [dispatch],
  );

  return (
    <ScrollView
      contentContainerSx={{ paddingY: 70 }}
      sx={{
        backgroundColor: '$background',
        paddingX: '$default',
      }}
      showsVerticalScrollIndicator={false}>
      <Text variant="title">Регистрация</Text>
      <Text variant="subtitle" sx={{ marginTop: '$default' }}>
        Введите вашу почту и пароль
      </Text>
      <View sx={{ marginTop: 50 }}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Email"
                placeholder="serg@barmi.ru"
                value={value}
                onChangeText={onChange}
                error={errors.email?.message}
              />
            );
          }}
        />
      </View>
      <View sx={{ marginTop: 30 }}>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Имя"
                placeholder="Сережа"
                value={value}
                onChangeText={onChange}
                error={errors.firstName?.message}
              />
            );
          }}
        />
      </View>
      <View sx={{ marginTop: 30 }}>
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Фамилия"
                placeholder="Бармин"
                value={value}
                onChangeText={onChange}
                error={errors.lastName?.message}
              />
            );
          }}
        />
      </View>
      <View sx={{ marginTop: 30 }}>
        <Controller
          control={control}
          name="patronymic"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Отчество (необязательно)"
                placeholder="Михайлович"
                value={value}
                onChangeText={onChange}
                error={errors.patronymic?.message}
              />
            );
          }}
        />
      </View>
      <View sx={{ marginTop: 30 }}>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Телефон"
                placeholder="+7(123)456-78-99"
                value={value}
                onChangeText={onChange}
                error={errors.phone?.message}
              />
            );
          }}
        />
      </View>
      <View sx={{ marginTop: 30 }}>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Пароль"
                placeholder="*******"
                value={value}
                onChangeText={onChange}
                error={errors.password?.message}
                secureTextEntry={true}
              />
            );
          }}
        />
      </View>
      <View sx={{ marginTop: 30 }}>
        <Controller
          control={control}
          name="recoverPassword"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Повторите пароль"
                placeholder="*******"
                value={value}
                onChangeText={onChange}
                error={errors.recoverPassword?.message}
                secureTextEntry={true}
              />
            );
          }}
        />
      </View>
      <View sx={{ marginTop: 30, alignItems: 'center' }}>
        <Button onPress={navigateToLogin}>
          <Text variant="link">Войти &gt;</Text>
        </Button>
      </View>
      <PrimaryButton
        text="Зарегистрироваться"
        marginTop={50}
        onPress={handleSubmit(registerUser)}
      />
    </ScrollView>
  );
};

export default Register;
