import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { font_size, fonts_family } from "../../constants/fontsize";


type TextThemeProps = {
  regular?: boolean;
  header?: boolean;
  subHeader?: boolean;
  title?: boolean;
  subTitle?: boolean;
  body?: boolean;
  caption?: boolean;
  small?: boolean;
  size?: number;
  transform?: "uppercase" | "lowercase" | "capitalize";
  align?: "left" | "center" | "right";

}



type CustomTextProps = {
  text?: string;
  children?: React.ReactNode;
  center?: boolean;
  fontWeight?: "large" | "bold" | "semibold" | "medium" | "regular" | "light" | "thin"
  fontSize?: "xxxxxl" | "xxxxl" | "xxxl" | "xxl" | "xl" | "l" | "dd" | "d" | "mm" | "m" | "s" | "xs"
  color?: string,
  underline?: boolean,
  theme?: TextThemeProps

} & TextProps;



const CustomText: React.FC<CustomTextProps> = ({

  text,
  children,
  center,
  fontWeight,
  fontSize,
  color,
  underline,
  theme,
}: CustomTextProps) => {

  const styles = getStyles({ center, fontWeight, fontSize, color, underline, theme, })
  return (
    <>
      <Text style={styles.text}>
        {text ?? children}
      </Text>
    </>
  )
}

export default CustomText;

const getStyles = ({
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

    ...fonts_family[fontWeight],
    ...font_size[fontSize],
    // flexWrap: 'wrap',
    // alignSelf: 'flex-start',

    textDecorationLine: underline ? 'underline' : null,

  }
})


