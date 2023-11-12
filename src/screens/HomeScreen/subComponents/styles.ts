import { StyleSheet } from "react-native";
import { colors } from "../../../constants";




export const getStyles = () => StyleSheet.create({
  //!! get started and free premium button section
  premiumCardWrapper: {
    borderWidth: 1,
    marginVertical: 24,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.premiumButtonBrown,
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  premiumCardMessagebox: {
    width: 45,
    alignSelf: 'center',

  },
  contentWrapper: {
    marginLeft: 14,
    flex: 1,
    marginVertical: 13,
    justifyContent: 'space-between',

  },
  premiumCardArrow: {
    width: 24,
    height: 24,
  }

})