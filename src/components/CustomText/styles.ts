import { StyleSheet } from "react-native";
import { CustomTextProps } from "../../Types";
import { font_size, fonts_family } from "../../constants";


export const getStyles = ({
  fontWeight = 'regular',
  fontSize = 'd',
  color = 'black',
  center,
  underline = false,
  // style,
}: CustomTextProps) => StyleSheet.create({
  text: {
    textAlign: center ? 'center' : 'left',
    color: color ?? 'black',
    textDecorationLine: underline ? 'underline' : 'none',
    ...fonts_family[fontWeight], //! font family can change without styling
    ...font_size[fontSize], //! font size can change according to determined font sizes
  }
})