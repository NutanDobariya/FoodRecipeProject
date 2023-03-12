import React, {useState, useRef, useContext} from 'react';
import {View, Animated,Dimensions,Text,Platform} from 'react-native';
//import {FeedRow} from '../component/FeedRow';
// import {data} from '../constants/data';
// import { dimens } from '../constants/dimens';

const Home = () => {
  const [displayHeight, setDisplayHeight] = useState(Dimensions.get('window').height);
  const refFlatList = useRef();
  const [scrollY] = useState(new Animated.Value(0));
  const [scrollInfo, setScrollInfo] = useState({isViewable: true, index: 0});

  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 80};
  const onViewableItemsChanged = useRef(viewableItems => {
    const info = {
      isViewable: viewableItems.changed[0].isViewable,
      index: viewableItems.changed[0].index,
    };
    setScrollInfo(info);
  });

  const transitionAnimation = index => {
    const rowHeight = displayHeight * index;
    return {
      opacity: scrollY.interpolate({
        inputRange: [
          rowHeight,
          rowHeight + displayHeight / 2,
          rowHeight + displayHeight,
        ],
        outputRange: [1, 0.2, 0],
        useNativeDriver: true,
        extrapolate: 'clamp',
      }),
    };
  };

  const getItemLayout = (item, index) => ({
    length: displayHeight,
    offset: displayHeight * index,
    index,
  });

  const onLayout = ({nativeEvent}) => {
    setDisplayHeight((!Platform.OS=='ios' && nativeEvent.layout.height) || displayHeight);
  };

  const onEndReached = () => {
    // make api call here
  };

  const keyExtractor = (item, index) => {
    return `${item.id}`;
  };

  // const renderItem = ({item, index}) => {
  //   const scrollIndex = scrollInfo?.index || 0;
  //   const isNext = index >= scrollIndex - 1 && index <= scrollIndex + 1;
  //   return (
  //     <FeedRow
  //       item={item}
  //        isNext={isNext}
  //        index={index}
  //        transitionAnimation={transitionAnimation}
  //        visible={scrollInfo}
  //        isVisible={scrollIndex === index}
  //     />
  //   );
  // };

  return (
    <View style={{ flex: 1,
      backgroundColor: 'transparent'}} onLayout={onLayout}>
      {/* <Animated.FlatList
        pagingEnabled
        showsVerticalScrollIndicator={false}
        ref={refFlatList}
       automaticallyAdjustContentInsets={true}
       onViewableItemsChanged={onViewableItemsChanged.current}
       viewabilityConfig={viewabilityConfig}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        data={data}
        renderItem={renderItem}
       getItemLayout={getItemLayout}
       keyExtractor={keyExtractor}
       onEndReachedThreshold={20}
       onEndReached={onEndReached}
       removeClippedSubviews={true}
      /> */}
      <Text>Home screen</Text>
    </View>
  );
};

export default Home;
