import {all, fork} from 'redux-saga/effects';
import {getTopNews} from './news';

export default function* saga() {
  yield all([fork(getTopNews)]);
}
