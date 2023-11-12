import { StyleSheet } from "react-native";
import { calculatedPaddingHorizontal, colors, font_size, fonts_family, width } from "../../constants";



export const getStyles = ({ top }: any) => StyleSheet.create({

  //!! header and searchbar section
  headerImageBG: {
    width: width,
    marginLeft: -calculatedPaddingHorizontal,
    padding: calculatedPaddingHorizontal,
    paddingTop: top + 20,
    borderBottomColor: 'rgba(60,60,67,0.1)',
    borderBottomWidth: 1,
  },
  textinputWrapper: {
    width: width - 40,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: colors.gray,
    alignItems: 'center',
    marginTop: 14,
  },
  textinput: {
    flex: 1,
    color: colors.black,

    marginLeft: 5,
    ...font_size.d,
    ...fonts_family.medium,

  },
  searchicon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.gray,
    marginRight: 10,

  },
  goodafternoontext: {
    marginTop: 6
  },

  //!! flatlist and render item styles

  flatlist: {
    marginHorizontal: -calculatedPaddingHorizontal,
  },
  flatlistColumnWrapper: {
    marginHorizontal: calculatedPaddingHorizontal,
  },
  footerComponentStyle: {
    height: 100
  }


})