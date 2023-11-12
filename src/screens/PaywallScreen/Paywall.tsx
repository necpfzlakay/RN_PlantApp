

import React from "react";
import { CustomButton, CustomPage, CustomText } from "../../components";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { getStyles } from "./styles";
import { NavigationScreens, calculatedPaddingHorizontal, colors, width } from "../../constants";
import { CustomIconButton, ItemSeprator, RenderHorizontalCard } from "./SubComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonActions } from "@react-navigation/native";




//! Promotion buttons' data to listing them with a map function
const buttonsData = [
  {
    title: '1 Month',
    description: '$2.99/month, auto renewable',
    isThereDiscount: false,
  },
  {
    title: '1 Year',
    description: 'First 3 days free, then $529,99/year',
    isThereDiscount: true,
  }
]
//! Ads cards' data to listing them with a flatlist 
//! they could store in other file
const CardData = [
  {
    title: 'Unlimited',
    subTitle: 'Plant Identify',
    icon: require('../../assets/Icons/scanner.png'),
  },
  {
    title: 'Faster',
    subTitle: 'Process',
    icon: require('../../assets/Icons/speedometer.png'),
  },
  {
    title: 'Detailed',
    subTitle: 'Plant care',
    icon: require('../../assets/Icons/leaf.png'),
  }
]





type PaywallScreenProps = {
  navigation: any,
  router: any
}

const PaywallScreen: React.FC<PaywallScreenProps> = ({ navigation, router }) => {


  //!! It uses for navigating the home screen then clears the history
  function handleClosePaywall() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        history: [],
        routes: [{ name: NavigationScreens.HOME }],
      })
    )

  }

  const { top } = useSafeAreaInsets()
  const styles = getStyles();
  return (
    <>
      <CustomPage marginTop={0.01} >
        <Image
          source={require('../../assets/Images/paywallScreenImages/headerplant.png')}
          style={styles.headerPlantImage}
        />

        {/* //!! background Image which under the header plant image */}
        <View style={styles.bottomSideBackground} />


        {/* //!! Close icon button */}
        <TouchableOpacity onPress={handleClosePaywall} style={[styles.closeButtonCircle, { top: top + 16 }]} >
          <Image
            resizeMode="center"
            source={require('../../assets/Icons/closeicon.png')} />
        </TouchableOpacity>




        <View style={styles.bottomSideWrapper} >
          <View style={styles.contentWrapper} >
            <CustomText>
              <CustomText
                text="PlantApp"
                color={colors.white}
                fontSize="xxxl"
                fontWeight="bold"
              />
              <CustomText
                text=" Premium"
                color={colors.white}
                fontSize="xxl" fontWeight="thin"
              />
            </CustomText>
            <CustomText
              text="Access All Features"
              color={colors.gray}
              fontSize="dd"
            />

            {/* //! horizontal flatlist for demonstrating ads cards 
            //! also wrapped with View tag to prevent the overflow of the screen
            */}
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flatlistStyle}
                contentContainerStyle={styles.flatlistContentStyle}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <RenderHorizontalCard item={item} />}
                data={CardData}
                ItemSeparatorComponent={ItemSeprator}
              />
            </View>

            {/* //! choice buttons creating with an array to prevent the code duplication  */}
            <View>
              {buttonsData.map((item, index) =>
                <CustomIconButton item={item} key={index} />
              )}
            </View>

            {/* 
            //! submit button does not work because of in the requirements's 6. element
            //! says "Onboarding flow ends when the close button pressed"
            */}
            <CustomButton
              title="Try free for 3 days"
              style={styles.buttonStyle}
            />
          </View>
          <CustomText
            fontWeight="light"
            style={{ fontSize: 9, marginBottom: 8 }}
            color={colors.gray} center
            text="After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable" />
          <CustomText
            text="Terms  •  Privacy  •  Restore"
            fontSize="m"
            center color={colors.gray} fontWeight="light"
          />
        </View>
      </CustomPage>
    </>
  )
}
export default PaywallScreen;

