import {put, takeEvery, call} from 'redux-saga/effects';
import {
  GET_TOP_NEWS_FAILURE,
  GET_TOP_NEWS_REQUEST,
  GET_TOP_NEWS_SUCCESS,
} from '../../actions/types';
import config from 'react-native-config';
import axiosInstance from '../../api';

function* fetchData(action) {
  try {
    const {page} = action.payload;
    const type = 'general';

    const URL = `https://newsapi.org/v2/everything?q=${type}&sortBy=publishedAt&apiKey=${config.NEWS_API_KEY}&pageSize=10&page=${page}`;
    const sendData = {
      method: 'GET',
      url: URL,
    };

    const response = yield call(axiosInstance, sendData);

    yield put({
      type: GET_TOP_NEWS_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.log('===> ~ function*fetchData ~ error', error);
    yield put({
      type: GET_TOP_NEWS_FAILURE,
      error,
    });
  }
}

function* dataSaga() {
  yield takeEvery(GET_TOP_NEWS_REQUEST, fetchData);
}

export default dataSaga;
