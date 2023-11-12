import React, { useEffect } from "react";
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
import HeaderSearchbar from "./subComponents/HeaderSearchbar";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, filterCategories } from "../../redux/categoriesSlice";





const HomeScreen: React.FC = () => {

  const dispatch = useDispatch();
  //!! getting categories and search value from redux store with useSelector
  const { categories, search } = useSelector((state: any) => state);

  //!! filtering categories with search value which is coming from redux store
  //! in every change 'search' state
  useEffect(() => {
    dispatch(filterCategories(search))
  }, [search]);


  //!! react-query V4 getting categories from dummy api 
  //!! and storing in redux 
  const { refetch, isLoading } = useQuery({
    queryKey: ['CATEGORIES_GET'],
    queryFn: CATEGORIES_GET, // category api calls with axios' interceptors
    onSuccess: (data: any) => {
      dispatch(setCategories(data.data)) // calling redux action to store data
    },
    onError: (error) => { }
  })


  //! this function is empty because I did not found pagination params in api
  //! I tried '/getCategories?page=1' but it is not working 
  //! however I am keeping this function for future use
  //todo: refetch getCategories api with params and append existing data in redux store
  function onReachEnd() {
    console.log('end reached');
  }


  //! flatlist header component splitted with ternary operator for handling padding
  const ListHeaderComponent = () => search.value ?
    <View style={styles.flatlistHeaderNull} /> : <FlatlistHeader />

  const ItemSeparatorComponent = () => <View style={styles.flex} /> // item seprator component

  const { top } = useSafeAreaInsets() // getting safe area insets from react-native-safe-area-context
  const styles = getStyles({ top })
  return (
    <>
      <CustomPage marginTop={0.01} marginBottom={0.01} >

        {/* //!header searchbar component */}
        <HeaderSearchbar />

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
          ListHeaderComponent={ListHeaderComponent} // header component
          keyExtractor={(item, index) => index.toString()} // key extractor
          renderItem={({ item, index }) => <RenderItem item={item} index={index} />} // render item component
          //! data is coming from redux store and filtered with search value 
          data={categories.copyValue.length > 0 ? categories.copyValue : categories.value}
          columnWrapperStyle={styles.flatlistColumnWrapper}
          ItemSeparatorComponent={ItemSeparatorComponent} // item seprator component
          onEndReached={onReachEnd}
          ListFooterComponent={ListFooterComponent} // footer component
          ListFooterComponentStyle={styles.footerComponentStyle}
        />
      </CustomPage >
    </>
  )
}

export default HomeScreen;

const ListFooterComponent = () => <View /> // footer component






