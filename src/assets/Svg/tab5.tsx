


import { Path, Svg } from "react-native-svg"
import { colors } from "../../constants"



const Tab5svg = ({ focused }: any) => {

  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12.952 11.772C15.3361 11.772 17.4083 9.76977 17.4083 7.16271C17.4083 4.58693 15.3361 2.67856 12.952 2.67856C10.5678 2.67856 8.49565 4.62864 8.49565 7.18356C8.49565 9.76977 10.5567 11.772 12.952 11.772ZM5.47649 21.4286H20.4163C21.6084 21.4286 22.3214 20.9071 22.3214 20.0416C22.3214 17.3511 18.7229 13.6387 12.9408 13.6387C7.1699 13.6387 3.57141 17.3511 3.57141 20.0416C3.57141 20.9071 4.28442 21.4286 5.47649 21.4286Z"
        fill={focused ? colors.buttonGreen : "#BDBDBD"}
      />
    </Svg>
  )
}

export default Tab5svg