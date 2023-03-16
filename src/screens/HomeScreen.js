import React from 'react';
import {
  ScrollList,
  NoResultsFound,
  ItemCard,
  TextField,
} from '../components';
import {View,StatusBar, SafeAreaView, StyleSheet, Text, Platform} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import useRequests from '../hooks/useRequests';
import Colors from '../theme/Colors';
import {dimens} from '../constants/dimens';
import {getFontSize} from '../theme/Responsive';
import CategoryList from '../components/lists/CategoryList';

const HomeScreen = ({route, navigation}) => {
  const {
    loading,
    refreshing,
    requests,
    canLoadMore,
    categories,
    selectedCategory,
    filteredData,
    searchText,
    onRefresh,
    fetchNextPage,
    mangeCategoryPress,
    onFilterChange,
  } = useRequests();

  const renderItem = ({item}) => {
    return <ItemCard item={item} />;
  };

  const renderMainHeader = () => {
    return (
      <View>
        <Text
          style={[
            styles.headerText,
            {marginTop:Platform.OS == 'ios' ?0:StatusBar.currentHeight,paddingVertical: Platform.OS == 'ios' ? dimens.h2 : dimens.h2},
          ]}>{`Let's Cooking`}</Text>

        <TextField
          label="Search user by name"
          value={searchText}
          debounce={1000}
          //loading={loading}
          onChangeText={text => onFilterChange(text)}
          icon={<Feather name="search" size={dimens.w6} color={Colors.grey} />}
        />

        <View style={styles.categoryContainer}>
          <Text
            style={[
              styles.headerText,
              {fontSize: getFontSize(18)},
            ]}>{`Category`}</Text>
          <Text style={styles.smallText}>{`View all`}</Text>
        </View>
      </View>
    );
  };

  const renderHeaderComponent = () => (
    <CategoryList
      selectedCategory={selectedCategory}
      data={categories}
      ListHeaderComponent={renderMainHeader}
      onSelect={mangeCategoryPress}
    />
  );

  const renderEmptyListResults = () => (
    <NoResultsFound
      title="No such user found.."
      message="It seems that your search returned no results. Try searching for another product or category."
    />
  );

  return (
     <View style={styles.wrapper}>
      <SafeAreaView style={styles.safeContainer}>
        <ScrollList
          style={{paddingBottom: dimens.w2}}
          data={searchText ? filteredData : requests}
          refreshing={refreshing}
          loading={loading}
          canLoadMore={canLoadMore}
          onRefresh={onRefresh}
          onFetchNextPage={fetchNextPage}
          renderItem={renderItem}
          ListHeaderComponent={renderHeaderComponent}
          EmptyListComponent={renderEmptyListResults}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    flex: 1, backgroundColor: Colors.white
  },
  safeContainer:{
    flex: 1, marginHorizontal: dimens.w5
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: getFontSize(23),
    color: Colors.greyDark,
  },
  smallText: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(14),
    color: Colors.greyDark,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingTop: dimens.ho5,
    paddingBottom: dimens.h1_5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
