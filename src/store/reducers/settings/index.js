import {ENABLE_DARK_MODE, UPDATE_APP_LANGUAGE} from '../../actions/types';

const initialState = {
  darkModeEnabled: false,
  selectedLanguage: 'English',
};
const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_DARK_MODE:
      return {
        ...state,
        darkModeEnabled: action.payload.darkMode,
      };
    case UPDATE_APP_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload.selectedLanguage,
      };

    default:
      return state;
  }
};

export default settingsReducer;
