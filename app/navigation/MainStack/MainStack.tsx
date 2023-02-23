import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../TabStack';
import {DetailsScreen} from '../../screens/DetailsScreen/DetailsScreen';
import {MainStackType} from '../types';

const MainStack = createNativeStackNavigator<MainStackType>();

const MainNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="tabs" component={TabNavigation} />
      <MainStack.Screen name="details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
