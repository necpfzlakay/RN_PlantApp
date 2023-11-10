import React from "react";
import { CustomText } from "../../../components";
import { Image, ImageBackground, View } from "react-native";
import { getStyles } from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width } from "../../../constants";





const SecondScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const styles = getStyles();
  return (

    <ImageBackground
      source={require('../../../assets/Images/onBoardingImages/secondBG.png')}
      //! I have met a unexpected issue in styles file
      style={[styles.container, { paddingTop: top, }]} >


      <CustomText>
        <CustomText
          text="Get plant "
          fontSize="xxl"
          fontWeight="medium"
        />
        <View style={styles.brushWrapper} >
          <CustomText
            text="care guides"
            fontSize="xxl"
            fontWeight="large"
          />
          <Image
            source={require('../../../assets/Images/onBoardingImages/Brush.png')}
            style={styles.brushImage2}
            resizeMode="contain"
          />
        </View>

      </CustomText>

      {/* <Image
        source={require('../../../assets/Images/onBoardingImages/object.png')}
        style={styles.plantImage} /> */}

      <Image
        source={require('../../../assets/Images/onBoardingImages/iphone.png')}
        style={styles.secondContentImage}
      />
      <View style={styles.flex} />
      <View
        style={styles.shadowView}
      />

    </ImageBackground>
  )
}
export default SecondScreen;