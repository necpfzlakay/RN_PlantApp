import { createSlice, PayloadAction } from '@reduxjs/toolkit'


//!! this is a reducer for searchbar' s text state in the home page
//!! we are using this state for filtering data
export const SearchReducer = createSlice({
  name: 'counter',
  initialState: {
    value: '',
  },
  reducers: {
    //! this action is using for setting text to the state
    SETTEXT: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  },
})

export const { SETTEXT } = SearchReducer.actions

export default SearchReducer.reducer