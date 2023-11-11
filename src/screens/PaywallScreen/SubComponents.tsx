
import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { CustomText } from "../../components"
import { colors } from "../../constants"
import { getStyles } from "./styles"


export const ItemSeprator = () => <View style={{ width: 10 }} />


type RenderHorizontalCardProps = {
  item: {
    title: string,
    subTitle: string,
    icon: any
  }
}
export const RenderHorizontalCard = ({ item }: RenderHorizontalCardProps) => {
  const styles = getStyles()
  return (
    <>
      <View style={styles.horizontalCardWrapper} >
        <View style={styles.horizontalCardImageWrapper} >
          <Image
            source={item.icon}
            style={styles.horizontalCardImage}
          />
        </View>
        <View >
          <CustomText
            text={item.title}
            color="white"
            fontWeight="medium"
            fontSize="xl"
          />
          <CustomText
            text={item.subTitle}
            color={colors.gray}
            fontSize="mm"
            style={styles.horizontalCardSubtext}
          />
        </View>
      </View >
    </>
  )
}

type CustomIconButtonProps = {
  item: { title: string, description: string, isThereDiscount: boolean }
}

export const CustomIconButton = ({ item }: CustomIconButtonProps) => {
  const styles = getStyles()
  return (
    <>
      <TouchableOpacity
        style={[
          styles.touchableWrapper,
          item?.isThereDiscount ? styles.discountedTouchable : null
        ]}>
        {item?.isThereDiscount ?
          <View style={styles.discountPopup} >
            <CustomText
              text="Save 50%"
              fontSize="m"
              fontWeight="semibold"
              style={styles.discountPopupText}
            />
          </View> : null //!! if we use && operator it may caouse performance leaks
        }
        <View
          style={item?.isThereDiscount ? styles.discountedCircle : styles.undiscountedCircle}
        >
          <View style={item?.isThereDiscount ? styles.discountedInsideCircle : styles.undiscountedInsideCircle} />
        </View>
        <View style={styles.touchableContentWrapper} >
          <CustomText text={item?.title} fontWeight="semibold" color={colors.white} fontSize="dd" />
          <CustomText text={item?.description} color={colors.gray} fontSize="mm" />
        </View>

      </TouchableOpacity>
    </>
  )
}
