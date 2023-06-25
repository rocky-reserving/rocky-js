// redux root reducer
import { combineReducers } from '@reduxjs/toolkit';

// individual state slice reducers
import pageReducer from './slices/page.slice';
import curPageReducer from './slices/curPage.slice';
import workbenchReducer from './slices/workbench.slice';

const rootReducer = combineReducers({
  page: pageReducer,
  curPage: curPageReducer,
  workbench: workbenchReducer,
});

export default rootReducer;
