import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, Text, View, SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';
// import { getFontSize } from './../utility/Responsive';
// import appColors from './../constants/colors';
// import { dimens } from './../constants/dimens';
// import strings from './../constants/strings';
// import { GetUserList } from "../api/home";
// import Feather from 'react-native-vector-icons/Feather';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import * as dashboardActions from "../store/location/actions";
// import ImageModal from './../component/ImageModal';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import PinchableBox from '../component/PinchableBox'

export default function HomeScreen(props) {

  const dispatch = useDispatch();
  const [useList1, setUseList] = useState([
    { id: 1, title: 'France', image: 'https://avatars.githubusercontent.com/u/20300?v=4', description: 'this place is very beautiful' },
    { id: 2, title: 'New York', image: 'https://avatars.githubusercontent.com/u/24278?v=4', description: 'this place is very beautiful' },
    { id: 3, title: 'Paris', image: 'https://avatars.githubusercontent.com/u/20300?v=4', description: 'this place is very beautiful' },
    { id: 4, title: 'New York', image: 'https://avatars.githubusercontent.com/u/24278?v=4', description: 'this place is very beautiful' },
    { id: 5, title: 'Chicago', image: 'https://avatars.githubusercontent.com/u/20300?v=4', description: 'this place is very beautiful' },
    { id: 6, title: 'Itly', image: 'https://avatars.githubusercontent.com/u/24278?v=4', description: 'this place is very beautiful' },
  ]);
  const [isShowImgDialog, setShowImgDialog] = useState(false);
  const [imgUri, setImgUri] = useState('');

  const useList = useSelector(state => state.location.userData);

  // useEffect(() => {
  //   console.log("Homescreen called...");
  //   GetUserListData();
  // }, []);

  // const getMovies = async () => {
  //   try {
  //     // const response = await fetch('https://reactnative.dev/movies.json');
  //     const response = await fetch('https://reqres.in/api/users?page=2');
  //     const json = await response.json();
  //     setData(json.movies);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }


  // async function GetUserListData() {
  //   const result = await GetUserList();
  //   dispatch(dashboardActions.userData(result.data));
  // }

  // const dismissImageDialog = () => {
  //   setShowImgDialog(false);
  // }



  // const renderStories = ({ item, index }) => {
  //   return (
  //     <View style={styles.storyContainer}>
  //       <TouchableOpacity onPress={() => {
  //         setShowImgDialog(true)
  //         setImgUri(item.avatar)
  //       }}>
  //         <Image style={styles.storyImg} source={{ uri: item.avatar }} />
  //       </TouchableOpacity>
  //       <Text style={styles.storyText} numberOfLines={1}>{item.first_name}</Text>
  //     </View>
  //   );
  // };

  // const renderCards = ({ item, index }) => {
  //   return (
  //     <View style={styles.cardContainer}>

  //       <View style={styles.cardHeaderContainer}>
  //         <Image style={styles.cardHeaderImg} source={{ uri: item.avatar }} />
  //         <View style={styles.cardNameBg}>
  //           <Text style={styles.cardNameTitle1} numberOfLines={1}>{item.first_name}</Text>
  //           <Text style={styles.cardNameTitle2} numberOfLines={1}>{item.last_name}</Text>

  //         </View>
  //         <Feather name="more-vertical" color={appColors.black} size={dimens.h3} />

  //       </View>

  //       <View
  //         style={styles.cardImgContainer}
  //       >
  //         <View
  //           style={{
  //             height: "100%",
  //             flex: 1
  //           }}
  //         >

  //           <Image
  //             source={{
  //               uri: item.avatar
  //             }}
  //             style={styles.cardImg}
  //           />

  //           {/* <PinchableBox imageUri={item.avatar} /> */}


  //         </View>
  //       </View>
  //       <View style={{ flexDirection: 'row' }}>
  //         <View style={{ flex: 1, flexDirection: 'row' }}>
  //           <AntDesign name="hearto" color={appColors.black} size={dimens.h3} style={styles.cardBottomIcon} />
  //           <MaterialCommunityIcons name="comment-outline" color={appColors.black} size={dimens.h3} style={styles.cardBottomIcon} />
  //           <Feather name="send" color={appColors.black} size={dimens.h3} style={styles.cardBottomIcon} />
  //         </View>
  //         <Fontisto name="bookmark" color={appColors.black} size={dimens.h3} style={[styles.cardBottomIcon, { alignSelf: 'flex-end', marginHorizontal: dimens.w2 }]} />

  //       </View>
  //     </View>

  //   );
  // };


  // function renderHeader() {
  //   return (
  //     <View style={styles.headerBg}>
  //       <Text style={styles.headerText}>
  //         {"Social App"}
  //       </Text>
  //     </View>
  //   );
  // }


  return (
    <View style={{ flex: 1 }}>

      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>


        <View
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        >
          <Text>Home.........</Text>
          </View>
          {/* <View style={{ height: dimens.h5, backgroundColor: appColors.lightGrey }}>
            {renderHeader()}
          </View>
          <ScrollView>
            <View style={{ flex: 1, backgroundColor: appColors.white }}>
              <FlatList
                horizontal={true}
                data={useList}
                style={{
                  //backgroundColor:appColors.black,
                  padding: dimens.w2,
                }}
                renderItem={renderStories}
                keyExtractor={(item, index) => item.id}
              />

              <View style={{ width: '100%', height: dimens.wo1, marginHorizontal: dimens.w2, backgroundColor: appColors.grey }}></View>
              <FlatList
                data={useList}
                style={{
                  paddingHorizontal: dimens.w1,
                  alignSelf: "flex-start"
                }}
                renderItem={renderCards}
                keyExtractor={(item, index) => item.id}
              />

            </View>
          </ScrollView>
        </View>
        <ImageModal
          uri={imgUri}
          isVisible={isShowImgDialog}
          dismissModel={dismissImageDialog}
        // selectImageSelectionType={mediaSelectionType}
        /> */}
      </SafeAreaView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   headerBg: {
//     position: "absolute",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: dimens.w3
//   },
//   headerText: {
//     flex: 1,
//     paddingHorizontal: dimens.w5,
//     color: appColors.black,
//     fontSize: getFontSize(15)
//   },
//   storyContainer: { margin: dimens.w1 },
//   storyImg: {
//     width: dimens.h10,
//     height: dimens.h10,
//     borderRadius: dimens.h5,
//     borderWidth: dimens.wo5,
//     borderColor: 'pink',
//     resizeMode: "cover",

//   },
//   storyText: { fontSize: getFontSize(10), alignSelf: 'center', color: appColors.blackTrans, paddingTop: dimens.w1 },
//   cardContainer: {
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   cardHeaderContainer: {
//     flexDirection: "row",
//     padding: dimens.w2
//   },
//   cardHeaderImg: {
//     width: dimens.h5,
//     height: dimens.h5,
//     borderRadius: dimens.h2_5,
//     borderWidth: dimens.wo5,
//     borderColor: 'pink',
//     resizeMode: "cover",
//   },
//   cardNameBg: {
//     flexDirection: 'column', flex: 1, marginHorizontal: dimens.w3
//   },
//   cardNameTitle1: {
//     fontSize: 14, fontWeight: "bold", color: appColors.blackTrans, paddingTop: dimens.w1
//   },
//   cardNameTitle2: {
//     fontSize: 10, color: appColors.blackTrans
//   },
//   cardImgContainer: {
//     flexDirection: "row",
//     flex: 1,
//     width: dimens.w96,
//     margin: dimens.w1,
//     alignItems: "center",
//     height: dimens.h45,
//     borderRadius: dimens.w3,
//     borderWidth: dimens.wo1 / 3,
//     borderColor: appColors.grey,
//     overflow: "hidden",
//     backgroundColor: appColors.yello
//   },
//   cardImg: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover"
//   },
//   cardBottomIcon: {
//     padding: dimens.w1o5
//   }

// });