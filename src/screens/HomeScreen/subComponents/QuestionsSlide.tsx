import React from "react";
import { CustomText } from "../../../components";
import { ActivityIndicator, FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { QUESTIONS_GET } from "../../../utils/requests";
import { calculatedPaddingHorizontal, colors, width } from "../../../constants";




const QuestionsSlide = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['getQuestionss'],
    queryFn: QUESTIONS_GET,
    initialData: () => [{}, {}],
  })

  return (
    <>
      <CustomText text="Get Started" fontWeight="medium" fontSize="d" />
      {isLoading ?
        <View style={styles.activityindicator} >
          <ActivityIndicator size='large' color={'black'} />
        </View>
        :
        <FlatList horizontal showsHorizontalScrollIndicator={false}
          style={styles.flatlist}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <RenderItem item={item} />}
          ItemSeparatorComponent={ItemSeprator}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={styles.listfooterstyle}
          data={data}
        />
      }
    </>
  )
}
export default QuestionsSlide;

type RenderItemProps = {
  item: {
    id: number
    image_uri: string
    order: number
    title: string
    subtitle: string
    uri: string
  }
}
const RenderItem: React.FC<RenderItemProps> = ({ item }: RenderItemProps) => {
  // console.log(item);
  const [progress, setProgress] = React.useState(true)
  const { id, image_uri, order, title, uri, subtitle } = item
  function handleProgress() {
    setProgress(false)
  }
  return (
    <>
      <ImageBackground onProgress={handleProgress}
        source={{ uri: image_uri }}
        style={styles.renderItemWrapper}
        borderRadius={12}
        onLoad={() => console.log("image loaded")}
      >
        {progress ?
          <ActivityIndicator
            size={'large'}
            style={{ flex: 1 }}
            color={colors.black} />
          :
          <>
            <View style={styles.cardInsideTopView} />
            <View style={styles.cardInsideBottomView}>
              <CustomText
                text={title}
                color={colors.white}
                fontWeight="semibold"
                style={styles.cardInsideText}
              />
            </View>
          </>
        }
      </ImageBackground>
    </>
  )
}

const ItemSeprator = () => <View style={styles.seprator} />

const styles = StyleSheet.create({
  seprator: { width: 16 },
  activityindicator: {
    height: 164,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatlist: {
    marginTop: 16,
    width: width,
    marginHorizontal: -calculatedPaddingHorizontal,
    paddingLeft: calculatedPaddingHorizontal
  },
  listfooterstyle: {
    width: calculatedPaddingHorizontal * 2
  },
  renderItemWrapper: {
    width: 240,
    height: 164,
    backgroundColor: 'rgba(0,0,0,0.24)',
    borderRadius: 12,
    marginBottom: 24,
  },
  cardInsideTopView: {
    flex: 1.6,
    // borderColor: 'red'
  },
  cardInsideBottomView: {
    flex: 1,
    borderColor: 'white',
  },
  cardInsideText: {
    marginHorizontal: 14,
    marginTop: 11,
  }

})