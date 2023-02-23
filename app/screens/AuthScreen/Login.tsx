import React, { useCallback } from 'react';
import { View, Text, ScrollView } from 'dripsy';
import { Input } from '../../components/Input/Input';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Button } from '../../components/Button';
import { useAppNavigation } from '../../lib/hooks';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, schemaLogin } from '../../lib/validation/loginShema';
import { useAppDispatch } from '../../redux/store';
import { login } from '../../redux/Actions/userActions';

const Login = () => {
  const navigation = useAppNavigation();

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    reValidateMode: 'onChange',
    resolver: yupResolver(schemaLogin),
  });

  const navigateToRegister = useCallback(() => {
    navigation.navigate('register');
  }, [navigation]);

  const loginUser = useCallback(
    (data: LoginSchema) => {
      dispatch(login(data));
    },
    [dispatch],
  );

  return (
    <ScrollView
      contentContainerStyle={{ justifyContent: 'center', paddingTop: 70 }}
      sx={{
        flex: 1,
        backgroundColor: '$background',
        paddingX: '$default',
      }}
      showsVerticalScrollIndicator={false}>
      <Text variant="title">Авторизация</Text>
      <Text variant="subtitle" sx={{ marginTop: '$default' }}>
        Введите вашу почту и пароль
      </Text>
      <View sx={{ marginTop: 50 }}>
        <Controller
          control={control}
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
          name="email"
        />
      </View>
      <View sx={{ marginTop: 30 }}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="Пароль"
                placeholder="********"
                value={value}
                onChangeText={onChange}
                error={errors.password?.message}
                secureTextEntry={true}
              />
            );
          }}
          name="password"
        />
      </View>
      <View sx={{ marginTop: 30, alignItems: 'center' }}>
        <Button onPress={navigateToRegister}>
          <Text variant="link">Зарегистрироваться &gt;</Text>
        </Button>
      </View>
      <PrimaryButton
        text="Войти"
        marginTop={50}
        onPress={handleSubmit(loginUser)}
      />
    </ScrollView>
  );
};

export default Login;
