import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { font_size, fonts_family } from "../../constants/fontsize";
import { CustomTextProps } from "../../Types";
import { getStyles } from "./styles";





//! Custom Text component will be very important component in the app
//!! we can manage all texts with this component
//!! we can manage font weight, size or alignment with just one prop
//!! it causes If we want to change all text in the application
//!! It will be very easy thanks to this component
//todo: we can add language support with i18n
const CustomText: React.FC<CustomTextProps> = ({
  text,
  children,
  center,
  fontWeight,
  fontSize,
  color,
  underline,
  style,
}: CustomTextProps) => {

  const styles = getStyles({
    center,
    fontWeight,
    fontSize,
    color,
    underline,
  })
  return (
    <Text style={[styles.text, style]}>
      {text ?? children}
    </Text >
  )
}

export default CustomText;



