
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/Home";
import { NavigationScreens } from "../constants";



//!! this is tabs navigator. It demonstrates Home Screen in all pages 
const Tab = createBottomTabNavigator();
const TabsNav: React.FC = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name={NavigationScreens.TAB1} component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => null
      }} />
      <Tab.Screen name={NavigationScreens.TAB2} component={HomeScreen} />
      <Tab.Screen name={NavigationScreens.TAB3} component={HomeScreen} />
      <Tab.Screen name={NavigationScreens.TAB4} component={HomeScreen} />
      <Tab.Screen name={NavigationScreens.TAB5} component={HomeScreen} />
    </Tab.Navigator>
  )

}
export default TabsNav;
const Tab1Icon = () => { }
const Tab2Icon = () => { }
const Tab3Icon = () => { }
const Tab4Icon = () => { }
const Tab5Icon = () => { }