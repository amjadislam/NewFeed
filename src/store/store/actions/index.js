// Add our actions below

import {GET_NEWS_BY_QUERY_REQUEST, GET_TOP_NEWS_REQUEST} from './types';

const getTopNews = payload => {
  return {type: GET_TOP_NEWS_REQUEST, payload};
};

const getNewsByQuery = payload => {
  return {type: GET_NEWS_BY_QUERY_REQUEST, payload};
};

export {getTopNews, getNewsByQuery};
