import React from "react";
import { CustomButton, CustomPage } from "../../components";
import { ScrollView, View } from "react-native";
import { getStyles } from "./styles";
import FirstScreen from "./Slides/First";

import { calculatedPaddingHorizontal, width } from "../../constants";
import SecondScreen from "./Slides/Second";




const OnBoardingScreen: React.FC = () => {
  const styles = getStyles();
  const dotArray = [1, 2, 3];



  function handleOnPress() {
    console.log('OnBoardingScreen handleOnPress');
  }

  return (
    <>
      <CustomPage marginTop={.1}  >

        <View style={styles.flex} >
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
            style={{
              width: width,
              marginLeft: -calculatedPaddingHorizontal,
            }}
          >
            <FirstScreen />
            <SecondScreen />
          </ScrollView>
        </View>

        <CustomButton
          title={'Get Started'}
          style={styles.touchable}
          onPress={handleOnPress}
        />
        <View style={styles.dotsWrapper} >
          {dotArray.map((item, index) =>
            <View key={index}
              style={styles[index === 0 ? 'dotActive' : 'dotPassive']}
            />
          )}
        </View>

      </CustomPage>
    </>
  )
}

export default OnBoardingScreen;