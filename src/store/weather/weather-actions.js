export const SET_WEATHER = '@@country/SET_WEATHER';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/ERROR';

export const setWeather = (weather) => ({
    type: SET_WEATHER,
    payload: weather,
})

export const setLoading = () => ({
    type: SET_LOADING,
})

export const setError = (error)=>({
    type: SET_ERROR,
    payload: error,
});

export const loadWeather = () => (dispatch, _, {client, api}) => {
    dispatch(setLoading());

    client.get(api.getWeather())
    .then(({data}) => dispatch(setWeather(data)))
    .catch((error) => dispatch(setError(error.message)))
};