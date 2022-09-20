import {
  applyMiddleware,
  compose,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import Storage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';
import {
  reducer as network,
  createNetworkMiddleware,
} from 'react-native-offline';

import reducer from './reducers';
import saga from './sagas';

const persistConfig = {
  key: 'root',
  storage: Storage,
  stateReconciler: autoMergeLevel2,
};

const sagaMiddleware = createSagaMiddleware();
const networkMiddleware = createNetworkMiddleware();
const middleWares = [networkMiddleware, sagaMiddleware];

const rootReducer = combineReducers({
  reducer,
  network,
});

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    pReducer,
    compose(applyAppStateListener(), applyMiddleware(...middleWares)),
);
sagaMiddleware.run(saga);
const persist = persistStore(store);

export {store, persist};
