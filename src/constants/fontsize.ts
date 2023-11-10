import { StyleSheet } from "react-native";
import { width } from "./dimensions";



const fonts_family: any = StyleSheet.create({
  large: { fontFamily: 'System', fontWeight: '800' },
  bold: { fontFamily: 'System', fontWeight: '700' },
  semibold: { fontFamily: 'System', fontWeight: '600' },
  medium: { fontFamily: 'System', fontWeight: '500' },
  regular: { fontFamily: 'System', fontWeight: '400' },
  light: { fontFamily: 'System', fontWeight: '300' },
  thin: { fontFamily: 'System', fontWeight: '200' },
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
  s: { fontSize: 0.02 * width },    // 375 * 0.02 = 7.5
  xs: { fontSize: 0.01 * width },   // 375 * 0.01 = 3.75
});

export { font_size, fonts_family };