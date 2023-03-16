import {TouchableOpacity, View, StyleSheet, Image, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../../theme/Colors';
import {dimens} from '../../constants/dimens';
import {getFontSize} from '../../theme/Responsive';

const ItemCard = ({
  item,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.imageCover} source={{uri: item.avatar}} />
      <View
        style={styles.bottomContainer}>
        <View>
          <Text style={styles.firstname}>{item.first_name}</Text>
          <Text style={styles.lastname}>{item.last_name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.likeCount}>{item.id}</Text>
          <AntDesign
            name="hearto"
            color={Colors.red}
            size={dimens.w6}
          />

          <Ionicons
            name="bookmark" 
            color={Colors.mainTheme}
            size={dimens.w6}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderRadius: dimens.w3,
   // marginTop: dimens.w5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom:dimens.w5,
  },
  bottomContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: dimens.w1o5,
    paddingHorizontal: dimens.w2,
  },
  imageCover: {
    width: '100%',
    height: dimens.h26,
    borderRadius: dimens.w3,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstname: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(16),
    color: Colors.greyDark,
  },
  likeCount: {
    fontFamily: 'Poppins-Bold',
    fontSize: getFontSize(12),
    color: Colors.red,
    paddingHorizontal: dimens.w2,
  },
  lastname: {
    fontFamily: 'Poppins-Regular',
    paddingTop: -5,
    fontSize: getFontSize(12),
    color: Colors.greyDark,
  },
});

export default ItemCard;
