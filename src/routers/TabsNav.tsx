
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/Home";
import { NavigationScreens, colors, fonts_family } from "../constants";
import Tab1svg from "../assets/Svg/tab1";
import Tab2svg from "../assets/Svg/tab2";
import Tab3svg from "../assets/Svg/tab3.svg";
import Tab4svg from "../assets/Svg/tab4";
import Tab5svg from "../assets/Svg/tab5";
import { StyleSheet, View } from "react-native";


//!! this is tabs navigator. It demonstrates Home Screen in all pages 
const Tab = createBottomTabNavigator();
const TabsNav: React.FC = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.buttonGreen,
        tabBarLabelStyle: styles.labelStyle
      }}
    >
      <Tab.Screen name={NavigationScreens.TAB1} component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <Tab1svg focused={focused} />
        }}
      />
      <Tab.Screen name={NavigationScreens.TAB2} component={HomeScreen}
        options={{
          title: "Diagnose",
          tabBarIcon: ({ focused }) => <Tab2svg focused={focused} />
        }}
      />
      <Tab.Screen name={NavigationScreens.TAB3} component={HomeScreen}
        options={{ tabBarButton: () => <Tab3Icon /> }}
      />
      <Tab.Screen name={NavigationScreens.TAB4} component={HomeScreen}
        options={{
          title: "My Garden",
          tabBarIcon: ({ focused }) => <Tab4svg focused={focused} />
        }}
      />
      <Tab.Screen name={NavigationScreens.TAB5} component={HomeScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => <Tab5svg focused={focused} />
        }}
      />
    </Tab.Navigator>
  )

}
export default TabsNav;

const Tab3Icon = () => {
  return (
    <>
      <View style={styles.tab3buttonOutside}  >
        <View style={styles.tab3buttonInside}  >
          <Tab3svg />
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  tab3buttonOutside: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(44,204,128,.5)',
    bottom: 20
  },
  tab3buttonInside: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2CCC80',
  },

  labelStyle: {
    fontSize: 10,
    ...fonts_family.regular,
    marginBottom: 3
  }

})
