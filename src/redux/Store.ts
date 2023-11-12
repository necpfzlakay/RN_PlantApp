import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './SearchSlice'
import categoriesSlice from './categoriesSlice'


//!! we are combining reducers here
//!! there are 2 reducers in this project
//!! one of them is for searchbar's text state
//!! other one is for categories array lists in the home page
export default configureStore({
  reducer: {
    search: SearchReducer,
    categories: categoriesSlice
  }
})