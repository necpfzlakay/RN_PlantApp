import React from "react";
import CustomText from "../../components/CustomText/CustomText";
import { FlatList, Image, ImageBackground, RefreshControl, TextInput, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { CATEGORIES_GET } from "../../utils/requests";
import { CustomPage } from "../../components";
import { getStyles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { calculatedPaddingHorizontal, width } from "../../constants";
import FlatlistHeader from "./subComponents/FlatlistHeader";
import RenderItem from "./subComponents/RenderItem";





const HomeScreen: React.FC = () => {

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['CATEGORIES_GET'],
    queryFn: CATEGORIES_GET,
    onSuccess: (data) => {
      console.log("data", data)
    },
    onError: (error) => {
      // console.log("error", error)
    }
  })

  const { top } = useSafeAreaInsets()
  const styles = getStyles({ top })
  return (
    <>
      <CustomPage marginTop={0.01} marginBottom={0.01}  >

        {/* //!header section */}
        <ImageBackground
          style={styles.headerImageBG}
          resizeMode="stretch"
          source={require('../../assets/Images/HomeScreenImages/headerBackground.png')}>

          <CustomText text="Hi, plant lover!" fontSize="dd" />
          <CustomText
            fontWeight="medium"
            fontSize="xxl"
            text="Good Afternoon! ⛅"
            style={styles.goodafternoontext}
          />
          <View style={styles.textinputWrapper} >
            <Image
              source={require('../../assets/Icons/searchicon.png')}
              style={styles.searchicon}
            />
            <TextInput
              style={styles.textinput}
              placeholder="Search for plants"
              placeholderTextColor={'#AFAFAF'}
            />
          </View>
        </ImageBackground>
        {/* //! flatlist component */}
        <FlatList
          refreshControl={
            <RefreshControl
              tintColor={'#000'}
              refreshing={isLoading}
              onRefresh={refetch}
            />
          }
          showsVerticalScrollIndicator={false}
          numColumns={2}
          style={styles.flatlist}


          ListHeaderComponent={<FlatlistHeader />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
          data={data?.data ?? []}
          columnWrapperStyle={styles.flatlistColumnWrapper}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          onEndReached={null}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={styles.footerComponentStyle}
        />
      </CustomPage >
    </>
  )
}

export default HomeScreen;






