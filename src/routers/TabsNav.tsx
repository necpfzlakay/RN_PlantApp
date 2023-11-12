import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GetStartedScreen from "../screens/GetStartedScreen/GetStarted";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/Home";
import { NavigationScreens } from "../constants";



const Tab = createBottomTabNavigator();
const TabsNav: React.FC = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name={NavigationScreens.TAB1} component={HomeScreen} />
      <Tab.Screen name={NavigationScreens.TAB2} component={HomeScreen} />
      <Tab.Screen name={NavigationScreens.TAB3} component={HomeScreen} />
      <Tab.Screen name={NavigationScreens.TAB4} component={HomeScreen} />
      <Tab.Screen name={NavigationScreens.TAB5} component={HomeScreen} />
    </Tab.Navigator>
  )

}
export default TabsNav;