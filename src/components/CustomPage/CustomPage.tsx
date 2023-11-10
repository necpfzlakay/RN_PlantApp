import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { calculatedPaddingHorizontal } from "../../constants";



type CustomPageProps = {
  children: React.ReactNode
  paddingHorizontal?: number
  backgroundImage?: any
  marginTop?: number
}


const CustomPage = ({
  marginTop,
  children,
  paddingHorizontal = calculatedPaddingHorizontal,
  backgroundImage

}: CustomPageProps) => {


  const { bottom, top, left, right } = useSafeAreaInsets()
  const styles = getStyles({
    bottom, top, paddingHorizontal,
    marginTop,
    background: backgroundImage ? 'transparent' : 'white',

  });
  return (
    <>

      <ImageBackground
        style={styles.imageBackground}
        source={backgroundImage}
      >
        <View style={styles.container}  >
          {children}
        </View>
      </ImageBackground>



    </>
  )
}

export default CustomPage;

type StylesProps = {
  bottom?: number,
  top?: number,
  paddingHorizontal?: number,
  background?: string,
  marginTop?: number,

}
const getStyles = ({
  bottom,
  top,
  paddingHorizontal,
  marginTop,
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
    marginBottom: bottom ? bottom : 8,
    //! if marginTop is not provided, use custom top statusbar height or default 8
    marginTop: marginTop ? marginTop : top ? top : 8,
    paddingHorizontal,
    backgroundColor: background,
  },

})