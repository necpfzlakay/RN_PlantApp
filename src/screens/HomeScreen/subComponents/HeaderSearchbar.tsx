import { Image, ImageBackground, StyleSheet, TextInput, View } from "react-native"
import { CustomText } from "../../../components"
import { calculatedPaddingHorizontal, colors, font_size, fonts_family, width } from "../../../constants"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useDispatch } from "react-redux"
import { SETTEXT } from "../../../redux/SearchSlice"


//!! this component is used in HomeScreen.tsx
//!! Searchbar have just one job that is to canging search value in redux store
const HeaderSearchbar = () => {

  const dispatch = useDispatch();

  //! this function calls redux action to change search value in redux store
  function handleChangeText(text: string) {
    dispatch(SETTEXT(text))
  }
  const { top } = useSafeAreaInsets()
  return (
    <>
      {/* //!header section */}
      <ImageBackground
        style={[styles.headerImageBG, { paddingTop: top + 20 }]}
        resizeMode="stretch"
        //! header's background image
        source={require('../../../assets/Images/HomeScreenImages/headerBackground.png')}
      >
        <CustomText
          text="Hi, plant lover!"
          fontSize="dd" />
        <CustomText
          fontWeight="medium"
          fontSize="xxl"
          text="Good Afternoon! ⛅"
          style={styles.goodafternoontext}
        />
        <View style={styles.textinputWrapper} >
          <Image
            source={require('../../../assets/Icons/searchicon.png')} //! searchbar's icon
            style={styles.searchicon}
          />
          <TextInput
            onChangeText={handleChangeText} //! when text changed calling this function
            style={styles.textinput}
            placeholder="Search for plants"
            placeholderTextColor={'#AFAFAF'}
          />
        </View>
      </ImageBackground>

    </>
  )
}
export default HeaderSearchbar


const styles = StyleSheet.create({
  //!! header and searchbar section
  headerImageBG: {
    width: width,
    marginLeft: -calculatedPaddingHorizontal,
    padding: calculatedPaddingHorizontal,
    // paddingTop: top + 20,
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
})