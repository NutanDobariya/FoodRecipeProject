// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { useEffect, useState } from 'react';
// import { Text } from 'react-native';
// import { Colors } from '../theme/Colors';
// import HomeScreen from '../screens/home';

import React, { useEffect } from "react";

import HomeScreen from '../screens/HomeScreen';
// import NotificationScreen from './src/screens/NotificationScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import AddPostScreen from './src/screens/AddPostScreen';
import NotificationScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/HomeScreen';
import AddPostScreen from '../screens/HomeScreen';
import Home from '../screens/Home';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Colors } from '../theme/Colors';
import { dimens } from '../constants/dimens';
import SplashScreen from 'react-native-splash-screen'

// import strings from './src/constants/strings';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { getFontSize } from './/src/utility/Responsive';
//import { createDrawerNavigator } from '@react-navigation/drawer';


// Text.defaultProps = Text.defaultProps || {};
// Text.defaultProps.allowFontScaling = false;


export default function App() {

  useEffect(()=>{
    SplashScreen.hide();
  },[])

    const AppStack = createStackNavigator();
    
    function AppContainerStack() {
      return (
        <AppStack.Navigator
          Screen="MainTabScreen"
          initialRouteName="MainTabScreen"
          screenOptions={{ headerShown: false }}
        >
          <AppStack.Screen name="HomeScreen" component={HomeScreen} />
          {/* <AppStack.Screen name="SettingsScreen" component={SettingsScreen} />
          <AppStack.Screen name="AddPostScreen" component={AddPostScreen} />
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="SearchScreen" component={SearchScreen} />
          <AppStack.Screen name="NotificationScreen" component={NotificationScreen} />
          <AppStack.Screen name="MainTabScreen" component={MainTabScreen} /> */}
  
        </AppStack.Navigator>
      );
    }
  
    const HomeStack = createStackNavigator();
    function HomeStackScreen() {
      return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
          <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        </HomeStack.Navigator>
      );
    }
  
    const SearchStack = createStackNavigator();
    function SearchStackScreen() {
      return (
        <SearchStack.Navigator screenOptions={{ headerShown: false }}>
          <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
        </SearchStack.Navigator>
      );
    }
  
  
    const AddStack = createStackNavigator();
    function AddStackScreen() {
      return (
        <AddStack.Navigator screenOptions={{ headerShown: false }}>
          <AddStack.Screen name="Home" component={Home} />
        </AddStack.Navigator>
      );
    }
  
  
  
    const NotificationStack = createStackNavigator();
    function NotificationStackScreen() {
      return (
        <NotificationStack.Navigator screenOptions={{ headerShown: false }}>
          <NotificationStack.Screen name="NotificationScreen" component={NotificationScreen} />
        </NotificationStack.Navigator>
      );
    }
  
    const SettingsStack = createStackNavigator();
    function SettingsStackScreen() {
      return (
        <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
          <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
        </SettingsStack.Navigator>
      );
    }
  
 
    const MainTab = createBottomTabNavigator();
    function MainTabScreen() {
      return (
  
        <MainTab.Navigator initialRouteName="Home"
        //swipeEnabled="true"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: Colors.green,
              paddingTop: 0,
              paddingBottom: 0,
            },
          }}
        >
          <MainTab.Screen
            name={'Home'}
            component={HomeStackScreen}
            options={{
              headerShown: false,
              tabBarStyle: { height: Platform.OS === "ios" ? dimens.h10 : dimens.h8 },   //to set height of bottom tab-bar         
              tabBarLabel:
                ({ focused, color, position }) => (
                  <View />
                ),
              tabBarIcon: ({ focused, color, size }) => (
  
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
  
  
                  {/* <AntDesign name="home" color={focused ? appColors.red : appColors.black} size={dimens.h3} /> */}
  
                </View>
  
              ),
            }}
          />
  
          <MainTab.Screen
            name={'Search'}
            component={SearchStackScreen}
            options={{
              headerShown: false,
              tabBarStyle: { height: Platform.OS === "ios" ? dimens.h10 : dimens.h8 },   //to set height of bottom tab-bar         
              tabBarLabel:
                ({ focused, color, position }) => (
                  <View />
                ),
              tabBarIcon: ({ focused, color, size }) => (
  
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
  
  
                  {/* <AntDesign name="search1" color={focused ? appColors.red : appColors.black} size={dimens.h3} /> */}
  
                </View>
  
              ),
            }}
          />
  
          <MainTab.Screen
            name={'Add'}
            component={AddStackScreen}
            options={{
              headerShown: false,
              tabBarStyle: { height: Platform.OS === "ios" ? dimens.h10 : dimens.h8 },   //to set height of bottom tab-bar         
              tabBarLabel:
                ({ focused, color, position }) => (
                  <View />
                ),
              tabBarIcon: ({ focused, color, size }) => (
  
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
  
  
                  {/* <AntDesign name="pluscircleo" color={focused ? appColors.red : appColors.black} size={dimens.h3} /> */}
  
                </View>
  
              ),
            }}
          />
  
          <MainTab.Screen
            name={'Notification'}
            component={NotificationStackScreen}
            options={{
              headerShown: false,
              tabBarStyle: { height: Platform.OS === "ios" ? dimens.h10 : dimens.h8 },   //to set height of bottom tab-bar         
              tabBarLabel:
                ({ focused, color, position }) => (
                  <View />
                ),
              tabBarIcon: ({ focused, color, size }) => (
  
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
  
                  {/* <AntDesign name="hearto" color={focused ? appColors.red : appColors.black} size={dimens.h3} /> */}
  
                </View>
  
              ),
            }}
          />
  
          <MainTab.Screen
            name={'Settings'}
            component={SettingsStackScreen}
            options={{
              headerShown: false,
              tabBarStyle: { height: Platform.OS === "ios" ? dimens.h10 : dimens.h8 },   //to set height of bottom tab-bar         
              tabBarLabel:
                ({ focused, color, position }) => (
                  <View />
                ),
              tabBarIcon: ({ focused, color, size }) => (
  
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
  
                  {/* <AntDesign name="user" color={focused ? appColors.red : appColors.black} size={dimens.h3} /> */}
  
                </View>
  
              ),
            }}
          />
  
        </MainTab.Navigator>
  
      );
  
    }
  
  
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <AppContainerStack></AppContainerStack>
        </NavigationContainer>
      </View>
    );
  }