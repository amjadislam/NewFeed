// News Reducer

import {combineReducers} from 'redux';

import newsReducer from './news';
import settingsReducer from './settings';

const appReducer = combineReducers({
  news: newsReducer,
  settings: settingsReducer,
});

const reducer = (state, action) => {
  return appReducer(state, action);
};

export default reducer;
