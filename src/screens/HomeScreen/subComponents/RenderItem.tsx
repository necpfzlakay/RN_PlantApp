
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { calculatedPaddingHorizontal, width } from "../../../constants";
import { CustomText } from "../../../components";
import { RenderItemProps } from "../../../Types/HomePageTypes";


const RenderItem = ({ item, index }: RenderItemProps) => {
  const styles = getStyles({ index: index });

  //!! this component is used in Flatlist in Home.tsx
  //!! uses ImageBackground and CustomText components to showing data which is coming from api
  return (
    <>
      <ImageBackground
        source={{ uri: item.image.url }}
        borderRadius={12}
        style={styles.ImageBackground}
      >
        <CustomText
          fontSize="dd" fontWeight="medium"
          text={item.title} style={styles.text} />
      </ImageBackground>
    </>
  )
}
export default RenderItem;

const getStyles = ({ index }: any) => StyleSheet.create({

  ImageBackground: {
    flex: 1,
    height: 152,
    maxWidth: width / 2 - calculatedPaddingHorizontal - 5,
    borderRadius: 12,
    borderWidth: 1,
    marginLeft: index % 2 === 0 ? 0 : 5,  //!! this is for margin left and right
    marginRight: index % 2 === 0 ? 5 : 0, //!! for showing 2 items equal position in a row
    borderColor: 'rgba(60,60,67,0.1)',
    overflow: 'hidden',
  },
  text: {
    maxWidth: '70%',
    marginTop: 16,
    marginLeft: 16,
  }

})