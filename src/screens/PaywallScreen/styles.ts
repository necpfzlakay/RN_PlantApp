import { StyleSheet } from "react-native";
import { calculatedPaddingHorizontal, width } from "../../constants";




export const getStyles = () => StyleSheet.create({
  headerPlantImageWrapper: {
    width: width - calculatedPaddingHorizontal,
    borderWidth: 1
  },
  headerPlantImage: {
    // borderWidth: 1,
    // marginLeft: -calculatedPaddingHorizontal,
    width: width,
    height: '63%',
    // resizeMode: 'contain',
    // alignSelf: 'center',
    marginTop: -5,
    position: 'absolute',
    top: 0,
    left: 0


  }

})