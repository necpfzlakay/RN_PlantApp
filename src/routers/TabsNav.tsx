import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GetStartedScreen from "../screens/GetStartedScreen/GetStarted";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/Home";



const Tab = createBottomTabNavigator();
const TabsNav: React.FC = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  )

}
export default TabsNav;