import React, { useEffect, useRef } from "react";
import { CustomButton, CustomPage } from "../../components";
import { ScrollView, View } from "react-native";
import { getStyles } from "./styles";
import FirstScreen from "./Slides/First";
import SecondScreen from "./Slides/Second";
import { NavigationScreens, width } from "../../constants";





const OnBoardingScreen: React.FC = ({ navigation }: any) => {
  const styles = getStyles();
  const [index, setIndex] = React.useState(0);
  const ref = useRef<ScrollView>(null);
  const dotArray = [1, 2, 3];

  //! it is changing state to 0 on mount 
  useEffect(() => setIndex(0), [])

  function handleOnPress() {
    if (index === 1) {
      navigation.navigate(NavigationScreens.PAYWALL_SCREEN);
    }
    ref.current?.scrollTo({ x: width, animated: true })
    setIndex(1);
  }

  //! this function using for scrollView' s onMomentumScrollEnd prop
  //! if user scroll the first page, it will set index to 0
  //! or opposite 
  function handleScrolling(nativeEvent: any) {
    // console.log(nativeEvent.contentOffset.x);
    if (nativeEvent.contentOffset.x < 15) {
      setIndex(0);
    }
    if (nativeEvent.contentOffset.x > width - 15) {
      setIndex(1);
    }
  }

  return (
    <>
      <CustomPage marginTop={.1}  >
        <View style={styles.flex} >
          <ScrollView
            ref={ref}
            horizontal
            pagingEnabled
            onMomentumScrollEnd={({ nativeEvent }) => handleScrolling(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            style={styles.scrollView}
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
          {dotArray.map((item, i) =>
            <View key={i}
              style={styles[i === index ? 'dotActive' : 'dotPassive']}
            />
          )}
        </View>

      </CustomPage>
    </>
  )
}

export default OnBoardingScreen;