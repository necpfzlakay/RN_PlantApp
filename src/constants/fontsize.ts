import { StyleSheet } from "react-native";
import { width } from "./dimensions";



const fonts_family: any = StyleSheet.create({
  large: { fontFamily: 'Rubik-ExtraBold', fontWeight: '800' },
  bold: { fontFamily: 'Rubik-Bold', fontWeight: '700' },
  semibold: { fontFamily: 'Rubik-SemiBold', fontWeight: '600' },
  medium: { fontFamily: 'Rubik-Medium', fontWeight: '500' },
  regular: { fontFamily: 'Rubik-Regular', fontWeight: '400' },
  light: { fontFamily: 'Rubik-Light', fontWeight: '300' },
  thin: { fontFamily: 'Rubik-Thin', fontWeight: '200' },
});

const font_size = StyleSheet.create({
  xxxxxl: { fontSize: 0.1 * width },// 375 * 0.1 = 37.5
  xxxxl: { fontSize: 0.09 * width },// 375 * 0.09 = 33.75
  xxxl: { fontSize: 0.08 * width }, // 375 * 0.08 = 30
  xxl: { fontSize: 0.07 * width },  // 375 * 0.07 = 26.25
  xl: { fontSize: 0.06 * width },   // 375 * 0.06 = 22.5 
  l: { fontSize: 0.05 * width },    // 375 * 0.05 = 18.75
  dd: { fontSize: 0.045 * width },  // 375 * 0.045 = 16.875
  d: { fontSize: 0.04 * width },    // 375 * 0.04 = 15
  mm: { fontSize: 0.035 * width },  // 375 * 0.035 = 13.125
  m: { fontSize: 0.03 * width },    // 375 * 0.03 = 11.25
  ss: { fontSize: 0.025 * width },  // 375 * 0.025 = 9.375
  s: { fontSize: 0.02 * width },    // 375 * 0.02 = 7.5
  xs: { fontSize: 0.01 * width },   // 375 * 0.01 = 3.75
});

export { font_size, fonts_family };