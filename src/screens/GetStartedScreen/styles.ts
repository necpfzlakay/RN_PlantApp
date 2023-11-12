import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";



const { width, height } = Dimensions.get('window');

export const getStyles = () => StyleSheet.create({

  topContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  plantImage: {
    width: width,
    height: '100%', //* 499 / 812,
    flex: 1,
    resizeMode: 'contain',
    transform: [
      { scaleX: width / 375 },
      { scaleY: .99 },
      { translateY: height * .04 }
    ],
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  textOpacity: {
    opacity: 0.7,
  },
  touchable: {
    marginBottom: 17,
    backgroundColor: colors.buttonGreen,
  },


})