import {combineReducers} from 'redux';

import newsReducer from './news';
import settingsReducer from './settings';
import {persistReducer} from 'redux-persist';
import Storage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const appReducer = combineReducers({
  news: newsReducer,
  settings: settingsReducer,
});

const persistConfig = {
  key: 'root',
  storage: Storage,
  whitelist: ['settings'],
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, appReducer);

const reducer = (state, action) => {
  return pReducer(state, action);
};

export default reducer;
