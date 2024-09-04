
import { FETCH_COVID_DATA_SUCCESS, FETCH_COVID_DATA_FAILURE } from '../../Redux/action';

const initialState = {
  covidData: null,
  error: null,
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA_SUCCESS:
      return {
        ...state,
        covidData: action.payload,
        error: null,
      };
    case FETCH_COVID_DATA_FAILURE:
      return {
        ...state,
        covidData: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default covidReducer;
