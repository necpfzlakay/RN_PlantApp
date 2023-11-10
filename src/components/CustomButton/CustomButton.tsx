import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import CustomText from "../CustomText/CustomText";
import { colors, width } from "../../constants";




type CustomButtonProps = {
  title: string,
  style?: TouchableOpacityProps['style'],
  onPress?: () => void | undefined
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  style,
  onPress
}: CustomButtonProps) => {

  const styles = getStyles({});
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.touchableContainer, style]} >
        <CustomText
          text={title}
          color={colors.white}
          fontSize="d"
          fontWeight="bold"

        />
      </TouchableOpacity>
    </>
  )
}
export default CustomButton;


type StylesProps = {

}
const getStyles = ({ }: StylesProps) => StyleSheet.create({

  touchableContainer: {
    // borderWidth: 1,
    width: 327 / 375 * width,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  }
})