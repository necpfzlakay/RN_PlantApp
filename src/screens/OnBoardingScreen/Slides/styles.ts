import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { height, width } from "../../../constants/dimensions";
import { calculatedPaddingHorizontal } from "../../../constants";





export const getStyles = () => StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: calculatedPaddingHorizontal,
  },
  brushWrapper: {

  },
  flex: {
    flex: 1
  },
  brushImage: {
    width: 140,
    height: 30,
    position: 'absolute',
    right: -15,
    top: 7,

  },
  brushImage2: {
    width: 155,
    height: 30,
    position: 'absolute',
    right: 0,
    top: 5,
  },
  contentImage: {
    width: width,
    height: '100%',
    resizeMode: 'contain',
    transform: [
      { scaleY: width / 375 },
      { scaleX: width / 375 },
      { translateY: height * .19 }
    ],
    position: 'absolute',
  },
  secondContentImage: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
    transform: [
      { scaleY: width / 375 },
      { translateY: height * .149 },
    ],
    position: 'absolute',
  },
  touchable: {
    marginBottom: 17,
    backgroundColor: colors.buttonGreen,
  },
  dotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.red,
    marginHorizontal: 3,
  },
  plantImage: {
    position: 'absolute',
    width: width * 375 / 325,
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    transform: [
      { rotate: '-18deg' }
    ]
  },



})