import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/HomeScreen';
import Items from '../../screens/ItemsScreen';
import Profile from '../../screens/ProfileScreen';
import { Image, useDripsyTheme } from 'dripsy';
import { images } from '../../lib/images/images';
import { ImageSourcePropType } from 'react-native';

const TabsStack = createBottomTabNavigator();

const TabNavigation = () => {
  const { theme } = useDripsyTheme();

  const renderImageTabBar = useCallback(
    (color: string, size: number, source: ImageSourcePropType) => {
      return (
        <Image
          style={{ tintColor: color, width: size, height: size }}
          source={source}
        />
      );
    },
    [],
  );

  return (
    <TabsStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.$primary,
        tabBarInactiveTintColor: theme.colors.$text,
      }}>
      <TabsStack.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) =>
            renderImageTabBar(color, size, images.home),
        }}
      />
      <TabsStack.Screen
        name="items"
        component={Items}
        options={{
          tabBarIcon: ({ color, size }) =>
            renderImageTabBar(color, size, images.items),
        }}
      />
      <TabsStack.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) =>
            renderImageTabBar(color, size, images.profile),
        }}
      />
    </TabsStack.Navigator>
  );
};

export default TabNavigation;
