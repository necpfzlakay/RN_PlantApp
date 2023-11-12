import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { calculatedPaddingHorizontal } from "../../constants";
import { CustomPageProps } from "../../Types";
import { getStyles } from "./styles";





//!! Custom Page Component uses for wrapping page like 
//!! a safe area view but also wecan control the safe areas
//!! with this structure. 
//todo: we could add different type of pages like 
//todo: keyboardAwareScrollView library to handling keyboard in page
//!! also I tried to use ImageBackground to using images as background



const CustomPage = ({
  marginTop,
  children,
  paddingHorizontal = calculatedPaddingHorizontal,
  backgroundImage,
  marginBottom
}: CustomPageProps) => {

  const { bottom, top } = useSafeAreaInsets()

  const styles = getStyles({
    bottom,
    top, // to controlling status bar's height
    paddingHorizontal,
    marginTop, marginBottom, //bottom safe area
    //!! if image BG exist changing color of the all area
    background: backgroundImage ? 'transparent' : 'white',
  });
  return (

    <ImageBackground style={styles.imageBackground} source={backgroundImage}>
      <View style={styles.container} >
        {children}
      </View>
    </ImageBackground>
  )
}

export default CustomPage;

