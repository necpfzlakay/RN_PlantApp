import { StyleSheet } from "react-native";
import { width } from "../../constants";






export const getStyles = () => StyleSheet.create({

  touchableContainer: {
    // borderWidth: 1,
    width: 327 / 375 * width,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  }
})