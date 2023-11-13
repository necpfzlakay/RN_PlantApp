import React from "react";
import { CustomText } from "../../../components";
import { Image, ImageBackground, View } from "react-native";
import { getStyles } from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width } from "../../../constants";




//! second bullet of the onboarding screen
const SecondScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const styles = getStyles();
  return (

    <ImageBackground
      source={require('../../../assets/Images/onBoardingImages/secondBG.png')}
      //! I have met a unexpected issue in styles file
      style={[styles.container, { paddingTop: top + 20, }]} >

      <CustomText>
        <CustomText
          text="Get plant "
          fontSize="xxl"
          fontWeight="medium"
        />
        <CustomText
          text="care guides"
          fontSize="xxl"
          fontWeight="large"
        />
        <View style={styles.brushWrapper} >
          <Image
            source={require('../../../assets/Images/onBoardingImages/Brush.png')}
            style={styles.brushImage2}
            resizeMode="contain"
          />
        </View>
      </CustomText>
      <Image
        source={require('../../../assets/Images/onBoardingImages/iphone.png')}
        style={styles.secondContentImage}
      />


    </ImageBackground>
  )
}
export default SecondScreen;