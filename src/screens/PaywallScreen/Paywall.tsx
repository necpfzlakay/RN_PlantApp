

import React from "react";
import { CustomButton, CustomPage, CustomText } from "../../components";
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import { getStyles } from "./styles";
import { calculatedPaddingHorizontal, colors, height, width } from "../../constants";
import { CustomIconButton, ItemSeprator, RenderHorizontalCard } from "./SubComponents";





const PaywallScreen: React.FC = () => {


  const styles = getStyles();
  return (
    <>
      <CustomPage marginTop={0.01} >
        {/* <View style={styles.headerPlantImageWrapper} >
          </View> */}
        <Image
          source={require('../../assets/Images/paywallScreenImages/headerplant.png')}
          style={styles.headerPlantImage}
        />
        <View style={{
          width: width,
          height: '100%',
          backgroundColor: '#101E17',
          flex: 1,
          position: 'absolute',
          top: '60%'
        }} />

        <View style={{ flex: 1 }} />


        <View style={{
          // borderWidth: 1,
          // backgroundColor: 'red',
          flex: 1.7,
          // justifyContent: 'center',
        }} >
          <CustomText>
            <CustomText text="PlantApp" color={colors.white}
              fontSize="xxxl" fontWeight="bold"
            />
            <CustomText text=" Premium" color={colors.white}
              fontSize="xxl" fontWeight="thin"
            />
          </CustomText>
          <CustomText text="Access All Features" color={colors.gray}
            fontSize="dd"
          />
          <View>

            <FlatList horizontal showsHorizontalScrollIndicator={false}
              style={{
                marginLeft: -calculatedPaddingHorizontal,
                width: width,
                marginTop: 20,
                marginBottom: 24,
                height: 130,
              }}
              contentContainerStyle={{
                paddingHorizontal: calculatedPaddingHorizontal,
                // height: 130,
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => <RenderHorizontalCard item={item} />}
              data={CardData}
              ItemSeparatorComponent={ItemSeprator}
            />
          </View>

          <View style={{
            // borderWidth: 1,
            // width: width,
            justifyContent: 'space-between',
            flex: 1,
            // height: 1,
            // backgroundColor: 'rgba(255, 255, 255, 0.08)',
            marginBottom: 8,
          }} >

            <CustomIconButton >
              <CustomText text="dlsgmds" />
            </CustomIconButton>
            <CustomIconButton >
              <CustomText text="dlsgmds" />
            </CustomIconButton>
            <CustomButton title="Try free for 3 days" style={{ backgroundColor: colors.buttonGreen }} />
          </View>
          <CustomText
            fontWeight="light"
            // fontSize="s"
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
