import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Colors from '../../theme/Colors';
import {dimens} from '../../constants/dimens';
import {getFontSize} from '../../theme/Responsive';

const CategoryList = ({
  style,
  data,
  selectedCategory,
  ListHeaderComponent,
  ListFooterComponent,
  onSelect,
}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(item.label)}
        style={[
          styles.background,
          {
            backgroundColor:
              item.label == selectedCategory ? Colors.mainTheme : Colors.white,
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color:
                item.label == selectedCategory
                  ? Colors.white
                  : Colors.mainTheme,
            },
          ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      columnWrapperStyle={{
        flex: 1,
        marginBottom:dimens.w5,
        justifyContent: 'space-between',
      }}
      numColumns={data.length}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => `item-${index}`}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    borderRadius: dimens.w3_5,
    borderWidth: dimens.wo3,
    borderColor: Colors.mainTheme,
    width: dimens.w27,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(13),
    paddingTop: dimens.w1o5,
    paddingBottom: dimens.w1o5,
  },
});

export default CategoryList;
