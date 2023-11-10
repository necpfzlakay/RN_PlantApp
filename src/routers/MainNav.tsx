import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GetStartedScreen from "../screens/GetStartedScreen/GetStarted";
import TabsNav from "./TabsNav";
import OnBoardingScreen from "../screens/OnBoardingScreen/OnBoarding";
import { NavigationScreens } from "../constants/navigationScreens";
import PaywallScreen from "../screens/PaywallScreen/Paywall";



const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: 'white' }
}

const Stack = createNativeStackNavigator();
const MainNav: React.FC = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions} >
      <Stack.Screen name={NavigationScreens.GET_STARTED} component={GetStartedScreen} />
      <Stack.Screen name={NavigationScreens.ONBOARDING} component={OnBoardingScreen} />
      <Stack.Screen name={NavigationScreens.PAYWALL_SCREEN} component={PaywallScreen} />
      <Stack.Screen name={NavigationScreens.HOME} component={TabsNav} />
    </Stack.Navigator>
  )

}
export default MainNav;
