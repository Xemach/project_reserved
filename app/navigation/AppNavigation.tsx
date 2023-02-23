import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAppSelector} from '../redux/store';
import MainNavigation from './MainStack';
import AuthNavigation from './AuthStack/AuthStack';

const AppNavigation = () => {
  const userToken = useAppSelector(state => state.user.user?.token);

  if (!userToken) {
    return (
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
