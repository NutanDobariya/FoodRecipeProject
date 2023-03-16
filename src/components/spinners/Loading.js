import React from "react"
import { ActivityIndicator, Text, View } from "react-native"
import Colors from "../../theme/Colors"

const Loading = ({ size = "large", color = Colors.mainTheme, withMessage }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <ActivityIndicator size={size} color={color} />
    {withMessage && <Text style={{ color }}>This will take a moment</Text>}
  </View>
)

export default Loading
