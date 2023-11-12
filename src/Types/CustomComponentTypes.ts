import { TextProps, TouchableOpacityProps } from "react-native"





//! custom button component' s props
export type CustomButtonProps = {
  title: string,
  style?: TouchableOpacityProps['style'],
  onPress?: () => void | undefined
}

//! custom page component' s props
export type CustomPageProps = {
  children: React.ReactNode
  paddingHorizontal?: number
  backgroundImage?: any
  marginTop?: number
  marginBottom?: number
}

//! custom text component' s props
export type CustomTextProps = {
  text?: string;
  children?: React.ReactNode;
  center?: boolean;
  fontWeight?: "large" | "bold" | "semibold" | "medium" | "regular" | "light" | "thin"
  fontSize?: "xxxxxl" | "xxxxl" | "xxxl" | "xxl" | "xl" | "l" | "dd" | "d" | "mm" | "m" | "s" | "xs"
  color?: string,
  underline?: boolean,
} & TextProps;
