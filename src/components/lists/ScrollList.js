import React, { useEffect, useRef } from "react"
import { Dimensions, FlatList, RefreshControl, View } from "react-native"
import Loading from "../spinners/Loading"
import Colors from "../../theme/Colors"
import { dimens } from "../../constants/dimens"

const ScrollList = ({
  style,
  data,
  renderItem,
  loading,
  refreshing,
  onRefresh,
  onFetchNextPage,
  ItemSeparatorComponent,
  EmptyListComponent,
  canLoadMore,
  contentContainerStyle,
  inverted,
  ListHeaderComponent,
}) => {
  const scrollRef = useRef()

  const _renderFooter = () => {
    return canLoadMore ? (
      <View style={{ paddingVertical: dimens.h1, }}>
        <Loading />
      </View>
    ) : null
  }

  useEffect(() => {
    if (inverted && scrollRef && scrollRef.current && data && data.length > 0) {
      setTimeout(() => {
        scrollRef?.current?.scrollToEnd()
      }, 250)
    }
  }, [data, scrollRef])

  if (loading) return <Loading withMessage />

  return (
    <FlatList
      ref={scrollRef}
      showsVerticalScrollIndicator={false}
      style={[{ flex: 1}, style]}
      contentContainerStyle={contentContainerStyle}
      onEndReached={onFetchNextPage}
      onEndReachedThreshold={0.5}
      ListFooterComponent={_renderFooter}
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => `item-${index}`}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            style={{marginVertical:dimens.h2}}
            colors={[Colors.mainTheme]}
            tintColor={Colors.mainTheme}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        ) : null
      }
      ListEmptyComponent={EmptyListComponent}
    />
  )
}

export default ScrollList
