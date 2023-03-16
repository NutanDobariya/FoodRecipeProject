import React from 'react';
import {ImageBackground, Platform, View, Image, StyleSheet} from 'react-native';
import ImgBackground from './../../assets/start_bg.png';
import easy_food from './../../assets/easy_food.png';
import {SecondaryButton} from '../components';
import {dimens} from '../constants/dimens';
import Colors from '../theme/Colors';
import {getFontSize} from '../theme/Responsive';

export default function StartScreen({navigation}) {
  const getStarted = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'MainTabScreen'}],
    });
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        source={ImgBackground}
        style={{flex: 1}}>
        <View
          style={{
            height: dimens.h45,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: Platform.OS == 'ios' ? dimens.h50 : dimens.h52,
          }}>
          <Image source={easy_food} />

          <SecondaryButton text={'Get Started'} onPress={getStarted} />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  easyFoodText: {
    color: Colors.white,
    fontFamily: 'Snippet-Regular',
    fontSize: getFontSize(24),
  },
});