
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { calculatedPaddingHorizontal, width } from "../../../constants";
import { CustomText } from "../../../components";

type RenderItemProps = {
  item: {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    title: string
    rank: number
    image: {
      url: string
      width: number
      height: number
    }
  },
  index: number
}
const RenderItem = ({ item, index }: RenderItemProps) => {
  const styles = getStyles({ index: index });
  return (
    <>
      <ImageBackground source={{ uri: item.image.url }}
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
    marginLeft: index % 2 === 0 ? 0 : 5,
    marginRight: index % 2 === 0 ? 5 : 0,
    borderColor: 'rgba(60,60,67,0.1)',
    overflow: 'hidden',
  },
  text: {
    maxWidth: '70%',
    marginTop: 16,
    marginLeft: 16,
  }

})