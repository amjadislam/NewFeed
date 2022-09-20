import {put, takeEvery, call} from 'redux-saga/effects';
import {
  GET_NEWS_BY_QUERY_REQUEST,
  GET_NEWS_BY_QUERY_SUCCESS,
  GET_NEWS_BY_QUERY_FAILURE,
} from '../../actions/types';
import axiosInstance from '../../api';
import config from 'react-native-config';

function* fetchData(action) {
  try {
    const {query} = action.payload;

    const URL = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${config.NEWS_API_KEY}&pageSize=50`;
    const sendData = {
      method: 'GET',
      url: URL,
    };
    const response = yield call(axiosInstance, sendData);

    yield put({
      type: GET_NEWS_BY_QUERY_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({
      type: GET_NEWS_BY_QUERY_FAILURE,
      error,
    });
  }
}

function* dataSaga() {
  yield takeEvery(GET_NEWS_BY_QUERY_REQUEST, fetchData);
}

export default dataSaga;
