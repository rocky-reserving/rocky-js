// redux slice
import { createSlice } from '@reduxjs/toolkit';

// be able to get the current page if needed
import { get as getCurPage } from './curPage.slice';

// list of all pages
import pagesList from '../../pages/pagesList.data';

// current page
const curPage = getCurPage();

const pageSlice = createSlice({
  name: 'page',
  initialState: 'landing',
  reducers: {
    get: (state) => {
      state;
    },
    set: (state, action) => {
      // loop through all pages
      pagesList.forEach((page) => {
        // if the page name matches the payload, set the state to the payload
        if (page.name === action.payload) {
          state = action.payload;
        }
      });

      // if the payload is not a valid page name, do nothing, but log an error
      if (state === curPage) {
        console.error(
          `ERROR: ${action.payload} is not a valid page name. Please check the pagesList.data.js file for a list of valid page names.`,
        );
      }
    },
  },
});

export const { get, set } = pageSlice.actions;
export default pageSlice.reducer;
