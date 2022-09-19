// News Reducer

import {combineReducers} from 'redux';

import newsReducer from './news';

const appReducer = combineReducers({
  news: newsReducer,
});

const reducer = (state, action) => {
  return appReducer(state, action);
};

export default reducer;
