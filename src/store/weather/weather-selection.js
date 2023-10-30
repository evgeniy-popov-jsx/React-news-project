export const selectWeatherInfo = (state) => ({
    status: state.weatherReducer.status,
    error: state.weatherReducer.error,
    city: state.weatherReducer.weather.name,
    deg: state.weatherReducer.weather.main,
    weather: state.weatherReducer.weather.weather,
    qty: state.weatherReducer.weather.lenght,

});
