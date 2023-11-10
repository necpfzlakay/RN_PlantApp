import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainNav from "./routers/MainNav";




const Router: React.FC = () => {



  return (
    <>
      <NavigationContainer fallback={<></>}   >
        <MainNav />
      </NavigationContainer>
    </>
  )
}
export default Router;