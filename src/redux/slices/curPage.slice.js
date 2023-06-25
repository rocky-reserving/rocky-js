import { createSlice } from '@reduxjs/toolkit';

const curPageSlice = createSlice({
  name: 'cur-page',
  initialState: 'landing',
  reducers: {
    get: (state) => state,
    set: (state, action) => action.payload,
  },
});

export const { get, set } = curPageSlice.actions;
export default curPageSlice.reducer;
