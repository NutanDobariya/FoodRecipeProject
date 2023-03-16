import React, {useEffect,useState} from 'react';
import Colors from '../theme/Colors';
import {dimens} from '../constants/dimens';
import HomeScreen from '../screens/HomeScreen';
import StartScreen from '../screens/StartScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {View, Platform, StatusBar, StyleSheet,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Feather from 'react-native-vector-icons/Feather';
import NetInfo from '@react-native-community/netinfo';
import { getFontSize } from '../theme/Responsive';

export default function App() {
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    StatusBar.setHidden(true, 'none');

    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => {
      removeNetInfoSubscription();
    };
  }, []);

  const AppStack = createStackNavigator();

  function AppContainerStack() {
    return (
      <AppStack.Navigator
        Screen="StartScreen"
        initialRouteName="StartScreen"
        screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
        <AppStack.Screen name="StartScreen" component={StartScreen} />
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
        <AppStack.Screen name="BookmarkScreen" component={BookmarkScreen} />
        <AppStack.Screen name="SettingsScreen" component={SettingsScreen} />
        <AppStack.Screen name="MainTabScreen" component={MainTabScreen} />
      </AppStack.Navigator>
    );
  }

  const HomeStack = createStackNavigator();
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      </HomeStack.Navigator>
    );
  }

  const BookmarkStack = createStackNavigator();
  function BookmarkStackScreen() {
    return (
      <BookmarkStack.Navigator screenOptions={{headerShown: false}}>
        <BookmarkStack.Screen
          name="BookmarkScreen"
          component={BookmarkScreen}
        />
      </BookmarkStack.Navigator>
    );
  }

  const SettingsStack = createStackNavigator();
  function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator screenOptions={{headerShown: false}}>
        <SettingsStack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
        />
      </SettingsStack.Navigator>
    );
  }

  const MainTab = createBottomTabNavigator();
  function MainTabScreen() {
    return (
      <MainTab.Navigator
        initialRouteName="Home"
        //swipeEnabled="true"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
            borderTopLeftRadius: dimens.w5,
            borderTopRightRadius: dimens.w5,
            backgroundColor: Colors.white,
            paddingTop: 0,
            paddingBottom: Platform.OS === 'ios' ? dimens.h2 : 0,
            height: Platform.OS === 'ios' ? dimens.h8 : dimens.h8,
          },
        }}>
        <MainTab.Screen
          name={'Home'}
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: ({focused, color, position}) => <View />,
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Feather
                  name="home"
                  color={focused ? Colors.mainTheme : Colors.grey}
                  size={dimens.h4}
                />
              </View>
            ),
          }}
        />

        <MainTab.Screen
          name={'Bookmark'}
          component={BookmarkStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: ({focused, color, position}) => <View />,
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Feather
                  name="bookmark"
                  color={focused ? Colors.mainTheme : Colors.grey}
                  size={dimens.h4}
                />
              </View>
            ),
          }}
        />

        <MainTab.Screen
          name={'Settings'}
          component={SettingsStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: ({focused, color, position}) => <View />,
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Feather
                  name="user"
                  color={focused ? Colors.mainTheme : Colors.grey}
                  size={dimens.h4}
                />
              </View>
            ),
          }}
        />
      </MainTab.Navigator>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="#D99651"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />

      {isOffline === true ? (
        <View style={styles.offlineContainer}>
          <Text style={[styles.offlineText]} allowFontScaling={false}>
            {'oops... It seems that you have no internet connection.'}
          </Text>
          <Text style={{fontSize: 50, textAlign: 'center'}}>🚣‍</Text>
          <Text
            style={[styles.offlineHint, {paddingTop: 20, textAlign: 'center'}]}
            allowFontScaling={false}>
            {'The app will automatically reload when you are connected again.'}
          </Text>
        </View>
      ) : (
        <NavigationContainer>
          <AppContainerStack></AppContainerStack>
        </NavigationContainer>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  offlineContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    position: 'absolute',
    backgroundColor: Colors.white,
    flexGrow: 1,
  },
  offlineText: {
    textAlign: 'center',
    fontSize: getFontSize(22),
    fontWeight: '400',
    flexWrap: 'wrap',
    fontFamily:'Poppins-bold',
    marginBottom: 20,
  },
  offlineHint: {
    fontSize: getFontSize(15),
    fontWeight: '200',
    flexWrap: 'wrap',
    fontFamily:'Poppins-regular',
  },
});
