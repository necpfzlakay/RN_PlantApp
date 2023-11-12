import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RenderItemProps, RenderListProps } from '../Types/HomePageTypes'

//!! this is a reducer for categories array lists in the home page
export const CategoriesReducer = createSlice({
  name: 'categories',
  initialState: {
    value: [] as RenderListProps[], //!! actual data storing in safe
    copyValue: [] as RenderListProps[] //!! copy value is using for filtering data
  },
  reducers: {
    //! after fetching data from react-query, we are setting data to the state with this action
    //!! also we are sorting data by id (default was sorting by rank)
    setCategories: (state, action: PayloadAction<RenderListProps[]>) => {
      let data = action.payload.sort((a: any, b: any) => b.id - a.id)
      state.value = data
      // state.copyValue = data
    },
    //!! this action is using for filtering data by title
    //!! it is using for search bar
    //!! we are using copyValue for filtering data
    //!! also allows the user to search by lowercase and uppercase letters
    filterCategories: (state, action: PayloadAction<RenderItemProps>) => {
      let data = state?.value.filter(element =>
        element?.title
          .toLowerCase()
          .includes(action.payload?.value.toLowerCase())
      )
      state.copyValue = data
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCategories, filterCategories } = CategoriesReducer.actions

export default CategoriesReducer.reducer