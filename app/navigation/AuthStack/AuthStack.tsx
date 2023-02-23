import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from '../../screens/AuthScreen';
import { AuthStackType } from '../types';

const AuthStack = createNativeStackNavigator<AuthStackType>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
