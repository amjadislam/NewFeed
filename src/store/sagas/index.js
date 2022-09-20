import {all, fork} from 'redux-saga/effects';
import {getTopNews, getNewsByQuery} from './news';

export default function* saga() {
  yield all([fork(getTopNews), fork(getNewsByQuery)]);
}
