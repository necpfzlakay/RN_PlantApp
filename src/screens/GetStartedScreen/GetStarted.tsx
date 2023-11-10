import React from "react";
import { Image, View } from "react-native";
import { getStyles } from "./styles";
import { CustomButton, CustomPage, CustomText } from "../../components";
import { height } from "../../constants/dimensions";
import { colors } from "../../constants/colors";
import { NavigationScreens } from "../../constants/navigationScreens";



type GetStartedScreenProps = {
  navigation: any
}


const GetStartedScreen: React.FC<GetStartedScreenProps> = ({ navigation }) => {

  function handleOnPress() {
    navigation.navigate(NavigationScreens.ONBOARDING) // Navigate to Onboarding Screen
  }

  const styles = getStyles();
  return (
    <>

      <CustomPage
        backgroundImage={require("../../assets/Images/getStartedPageImages/Background.png")}
      >
        <Image style={styles.plantImage}
          source={require('../../assets/Images/getStartedPageImages/getStartedPlant.png')} />


        <View style={styles.topContainer} >
          <CustomText
            fontSize="xxxxl"
            text="Welcome to "
          />
          <CustomText
            fontSize="xxxl"
            fontWeight="semibold"
            text="PlantApp"
          />
        </View>

        <CustomText
          color="rgba(19, 35, 27, 0.7)"
          fontSize="dd"
          style={styles.textOpacity}
          text="Identify more than 3000+ plants and"
        />

        <CustomText
          color="rgba(19, 35, 27, 0.7)"
          fontSize="dd"
          style={styles.textOpacity}
          text="88% accuracy."
        />

        <View style={{ flex: 1 }} />

        <CustomButton
          title={'Get Started'}
          style={styles.touchable}
          onPress={handleOnPress}
        />

        <CustomText center fontSize="mm" color={colors.gray}
          text="By tapping next, you are agreeing to PlantID" />

        <CustomText>
          <CustomText center fontSize="mm" underline color={colors.gray}
            text="Terms of Use" />
          <CustomText center fontSize="mm" color={colors.gray}
            text=" & " />
          <CustomText center fontSize="mm" underline color={colors.gray}
            text="Privacy Policy" />
        </CustomText>

      </CustomPage >
    </>
  )
}

export default GetStartedScreen;

