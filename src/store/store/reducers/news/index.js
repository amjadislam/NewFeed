import {
  GET_NEWS_BY_QUERY_SUCCESS,
  GET_NEWS_BY_QUERY_REQUEST,
  GET_NEWS_BY_QUERY_FAILURE,
  GET_TOP_NEWS_REQUEST,
  GET_TOP_NEWS_SUCCESS,
  GET_TOP_NEWS_FAILURE,
} from '../../actions/types';

const initialState = {
  errorMessage: '',
  isLoading: false,
  newsList: [],
  currentPage: 0,
  totalResults: 0,
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_NEWS_REQUEST:
      return {
        ...state,
        errorMessage: '',
        isLoading: true,
        currentPage: action.payload.page,
        newsList: action.payload.page == 1 ? [] : state.newsList,
      };
    case GET_TOP_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsList: [...state.newsList, ...action.data.articles],
        totalResults: action.data.totalResults,
      };
    case GET_TOP_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message,
      };

    case GET_NEWS_BY_QUERY_REQUEST:
      return {
        ...state,
        errorMessage: '',
        isLoading: true,
        currentPage: action.payload.page,
        newsList: action.payload.page == 1 ? [] : state.newsList,
      };
    case GET_NEWS_BY_QUERY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsList: [...state.newsList, ...action.data.articles],
        totalResults: action.data.totalResults,
      };
    case GET_NEWS_BY_QUERY_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message,
      };

    default:
      return state;
  }
};

export default newsReducer;
