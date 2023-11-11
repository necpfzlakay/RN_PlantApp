import React from "react";
import { CustomText } from "../../../components";
import { Image, ImageBackground, View } from "react-native";
import { getStyles } from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";





const FirstScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const styles = getStyles();
  return (

    <ImageBackground
      source={require('../../../assets/Images/onBoardingImages/firstBG.png')}
      //! I have met a unexpected issue in styles file
      style={[styles.container, { paddingTop: top + 20 }]} >


      <CustomText>
        <CustomText
          text="Take a photo to "
          fontSize="xxl"
          fontWeight="medium"
        />
        <View style={styles.brushWrapper} >
          <CustomText
            text="identify"
            fontSize="xxl"
            fontWeight="large"
          />
          <Image
            source={require('../../../assets/Images/onBoardingImages/Brush.png')}
            style={styles.brushImage}
            resizeMode="contain"
          />
        </View>

      </CustomText>
      <CustomText
        text="the plant!"
        fontSize="xxl"
        fontWeight="medium"
      />

      <Image
        source={require('../../../assets/Images/onBoardingImages/Content.png')}
        style={styles.contentImage}
      />

    </ImageBackground>
  )
}
export default FirstScreen;