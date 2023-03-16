import React from 'react';
import {View, Text} from 'react-native';
import {dimens} from '../../constants/dimens';
import Colors from '../../theme/Colors';
import {getFontSize} from '../../theme/Responsive';

const NoResultsFound = ({title, message}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = {
  container: {
    minHeight: dimens.h60,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: Colors.mainTheme,
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(15),
  },
};

export default NoResultsFound;
