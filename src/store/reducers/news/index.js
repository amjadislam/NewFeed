import {ACTION_TYPE} from '../../actions/types';

const initialState = {
  errorMessage: 'Something went wrong. Please try again',
  isLoading: false,
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return {
        ...state,
        errorMessage: '',
      };

    default:
      return state;
  }
};

export default newsReducer;
