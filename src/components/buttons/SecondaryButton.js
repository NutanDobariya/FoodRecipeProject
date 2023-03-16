import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import { dimens } from "../../constants/dimens"
import Colors from "../../theme/Colors"
import { getFontSize } from "../../theme/Responsive"

const SecondaryButton = ({ onPress, text, disabled = false }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.button}
    >
      <Text style={[styles.text, disabled ? { color:'black' } : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
)

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: Colors.mainTheme,
    paddingVertical: dimens.h1,
    paddingHorizontal:dimens.w5,
    borderRadius: 20,
  },
  text: {
    fontFamily: "Roboto-Medium",
    color: Colors.white,
    fontSize: getFontSize(15),
  },
}

export default SecondaryButton
