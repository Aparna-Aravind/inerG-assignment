export const FETCH_COVID_DATA_SUCCESS = 'FETCH_COVID_DATA_SUCCESS';
export const FETCH_COVID_DATA_FAILURE = 'FETCH_COVID_DATA_FAILURE';

export const fetchCovidData = (selectedState) => async (dispatch) => {
  try {
    const response = await fetch(
      'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }

    const dataObj = await response.json();
    const data = dataObj.data.statewise;

    const stateData = data.find((item) => item.state === selectedState);

    dispatch({
      type: FETCH_COVID_DATA_SUCCESS,
      payload: stateData,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COVID_DATA_FAILURE,
      error: error.message,
    });
  }
};
