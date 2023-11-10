
import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { CustomText } from "../../components"
import { colors } from "../../constants"


export const ItemSeprator = () => <View style={{ width: 10 }} />


type RenderHorizontalCardProps = {
  item: {
    title: string,
    subTitle: string,
    icon: any
  }
}
export const RenderHorizontalCard = ({ item }: RenderHorizontalCardProps) => {

  return (
    <>
      <View
        style={{
          // borderWidth: 1,
          width: 156,
          height: 130,
          borderRadius: 14,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          padding: 16,
          justifyContent: 'space-between'
        }}
      >
        <View style={{
          borderRadius: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.24)',
          width: 36,
          height: 36,

          alignItems: 'center',
          justifyContent: 'center'
        }} >
          <Image source={item.icon} style={{ width: 18, height: 18, }} />
        </View>
        <View >
          <CustomText text={item.title} color="white" fontWeight="medium" fontSize="xl" />
          <CustomText text={item.subTitle} color={colors.gray} fontSize="mm" style={{ marginTop: 4 }} />
        </View>
      </View >
    </>
  )
}

type CustomIconButtonProps = {
  children?: React.ReactNode
}
export const CustomIconButton = ({ children }: CustomIconButtonProps) => {

  return (
    <>
      <TouchableOpacity
        style={{
          borderRadius: 14,
          borderWidth: .8,
          height: 60,
          justifyContent: 'center',
          padding: 16,
          borderColor: 'rgba(255, 255, 255, 0.3)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }}

      >
        {children}
      </TouchableOpacity>
    </>
  )
}

