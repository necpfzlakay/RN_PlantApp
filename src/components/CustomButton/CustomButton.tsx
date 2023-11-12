import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import CustomText from "../CustomText/CustomText";
import { colors, width } from "../../constants";
import { CustomButtonProps } from "../../Types";
import { getStyles } from "./styles";



//! this component uses for handling buttons that using in app
//! It is a simple component that takes title, style and onPress function as props
//todo: we can optimise and change buttons to atomic structure with this component
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  style,
  onPress
}: CustomButtonProps) => {

  const styles = getStyles();
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.touchableContainer, style]}
      >
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

