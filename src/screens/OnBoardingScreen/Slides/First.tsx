import React from "react";
import { CustomText } from "../../../components";
import { Image, ImageBackground, View } from "react-native";
import { getStyles } from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";




//!! first bullet of the onboarding screen
const FirstScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const styles = getStyles();
  return (

    <ImageBackground
      source={require('../../../assets/Images/onBoardingImages/firstBG.png')}
      //! Calculating safe area and adding it to paddingTop
      //!! in this way we don't lose safe area's background image
      style={[styles.container, { paddingTop: top + 20 }]} >


      <CustomText>
        <CustomText
          text="Take a photo to "
          fontSize="xxl"
          fontWeight="medium"
        />
        <CustomText
          text="identify"
          fontSize="xxl"
          fontWeight="large"
        />
        <View  >
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

      {/* //!! calling iphone image */}
      <Image
        source={require('../../../assets/Images/onBoardingImages/Content.png')}
        style={styles.contentImage}
      />

    </ImageBackground>
  )
}
export default FirstScreen;