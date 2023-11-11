import { StyleSheet } from "react-native";
import { calculatedPaddingHorizontal, colors, width } from "../../constants";




export const getStyles = () => StyleSheet.create({
  closeButtonCircle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    position: 'absolute',
    right: 16,

  },
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


  },
  bottomSideBackground: {
    width: width,
    height: '100%',
    backgroundColor: '#101E17',
    flex: 1,
    position: 'absolute',
    top: '60%'
  },
  bottomSideWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 8,

  },
  contentWrapper: { marginBottom: 8 },
  flatlistStyle: {
    marginLeft: -calculatedPaddingHorizontal,
    width: width,
    marginTop: 20,
    marginBottom: 24,
    height: 130,
  },
  flatlistContentStyle: {
    paddingHorizontal: calculatedPaddingHorizontal,
  },
  flex: { flex: 1 },
  buttonStyle: {
    backgroundColor: colors.buttonGreen,
    marginTop: 10,
  },

  //!!! RenderHorizontalCard Component Styles
  horizontalCardWrapper: {
    // borderWidth: 1,
    width: 156,
    height: 130,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
    justifyContent: 'space-between'
  },
  horizontalCardImageWrapper: {
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    width: 36,
    height: 36,

    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontalCardImage: {
    width: 18,
    height: 18,
  },
  horizontalCardSubtext: { marginTop: 4 },

  //!!! Item Button Component Styles
  touchableWrapper: {
    borderRadius: 14,
    borderWidth: .8,
    height: 60,
    alignItems: 'center',
    padding: 16,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    flexDirection: 'row',
    marginBottom: 15,
  },
  discountedTouchable: {
    borderColor: colors.buttonGreen,
  },
  discountedCircle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: colors.buttonGreen,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  undiscountedCircle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  discountedInsideCircle: {
    // borderWidth: 1,
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  undiscountedInsideCircle: {
    backgroundColor: 'transparent',
  },
  discountPopup: {
    position: 'absolute',
    right: 0,
    top: 0,
    // borderWidth: 1,
    borderTopEndRadius: 14,
    borderBottomStartRadius: 20,
    backgroundColor: colors.buttonGreen,
    alignItems: 'center',
    justifyContent: 'center',
    width: 77,
    height: 26,
  },
  discountPopupText: {
    color: colors.white,
    marginLeft: 4,

  },
  touchableContentWrapper: {
    marginLeft: 16,
    justifyContent: 'space-between',
  }



})