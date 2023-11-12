import { StyleSheet } from "react-native";


type StylesProps = {
  bottom?: number,
  top?: number,
  paddingHorizontal?: number,
  background?: string,
  marginTop?: number,
  marginBottom?: number,

}


export const getStyles = ({
  bottom,
  top,
  paddingHorizontal,
  marginTop,
  marginBottom,
  background = 'white',
}: StylesProps) => StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    //! to controlling safe areas
    //! if marginBottom is not provided, use custom bottom statusbar height or default 8
    marginBottom: marginBottom ? marginBottom : bottom ? bottom : 8,
    //! if marginTop is not provided, use custom top statusbar height or default 8
    marginTop: marginTop ? marginTop : top ? top : 8,
    paddingHorizontal,
    backgroundColor: background,
  },

})