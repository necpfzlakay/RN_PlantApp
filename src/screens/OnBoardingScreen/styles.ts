import { StyleSheet } from "react-native";

import { calculatedPaddingHorizontal, colors, height, width } from "../../constants";




export const getStyles = () => StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    borderColor: 'red',
  },
  brushWrapper: {
    marginTop: -3,
  },
  flex: {
    flex: 1
  },
  brushImage: {
    width: 140,
    height: 30,
    position: 'absolute',
    right: '5%',
    top: 30,

  },

  touchable: {
    marginBottom: 17,
    backgroundColor: colors.buttonGreen,
    width: '100%',
  },
  dotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.black,
    marginHorizontal: 3,
  },
  dotPassive: {
    width: 6,
    height: 6,
    borderRadius: 50,
    backgroundColor: colors.gray,
    marginHorizontal: 3,
  },
  scrollView: {
    width: width,
    marginLeft: -calculatedPaddingHorizontal,
  }



})