import {
  ENABLE_DARK_MODE,
  GET_NEWS_BY_QUERY_REQUEST,
  GET_TOP_NEWS_REQUEST,
  UPDATE_APP_LANGUAGE,
} from './types';

const getTopNews = payload => {
  return {type: GET_TOP_NEWS_REQUEST, payload};
};

const getNewsByQuery = payload => {
  return {type: GET_NEWS_BY_QUERY_REQUEST, payload};
};

const enableDarkMode = payload => {
  return {type: ENABLE_DARK_MODE, payload};
};

const updateAppLanguage = payload => {
  return {type: UPDATE_APP_LANGUAGE, payload};
};

export {getTopNews, getNewsByQuery, enableDarkMode, updateAppLanguage};
