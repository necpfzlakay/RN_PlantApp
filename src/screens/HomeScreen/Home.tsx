import React from "react";
import CustomText from "../../components/CustomText/CustomText";
import { Text, View } from "react-native";




const HomeScreen: React.FC = () => {

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

        <CustomText >
          <CustomText text="dslgs" theme={{ align: "center" }} />
          <CustomText text="dslgs" />
          <CustomText text="dslgs" />
        </CustomText>

      </View>
    </>
  )
}

export default HomeScreen;