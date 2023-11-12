import React from "react";
import { Image, View } from "react-native";
import { getStyles } from "./styles";
import { CustomText } from "../../../components";
import { calculatedPaddingHorizontal, colors } from "../../../constants";
import QuestionsSlide from "./QuestionsSlide";





const FlatlistHeader = () => {

  const styles = getStyles()
  return (
    <View style={{
      paddingHorizontal: calculatedPaddingHorizontal
    }} >

      <View style={styles.premiumCardWrapper} >
        <Image source={require('../../../assets/Icons/messagebox.png')}
          resizeMode="contain"
          style={styles.premiumCardMessagebox}
        />
        <View style={styles.contentWrapper} >
          <CustomText
            text="FREE Premium Available"
            color={colors.golden}
            fontWeight="semibold" fontSize="dd"
          />
          <CustomText
            fontSize="mm"
            text="Tap to upgrade your account!"
            color={colors.golden}
          />
        </View>
        <Image source={require('../../../assets/Icons/arrowright.png')}
          resizeMode="center"
          style={styles.premiumCardArrow} />
      </View>
      <QuestionsSlide />

    </View>

  )
}

export default FlatlistHeader;