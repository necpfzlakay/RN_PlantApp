import { StyleSheet } from "react-native";
import { calculatedPaddingHorizontal, colors, font_size, fonts_family, width } from "../../constants";



export const getStyles = ({ top }: any) => StyleSheet.create({



  //!! flatlist and render item styles

  flatlist: {
    marginHorizontal: -calculatedPaddingHorizontal, //to preventing overflow horizontal
  },
  flatlistColumnWrapper: {
    marginHorizontal: calculatedPaddingHorizontal,//to preventing overflow horizontal
  },
  footerComponentStyle: {
    height: 100
  },
  flatlistHeaderNull: {
    height: 24
  },
  flex: {
    height: 10
  },


})