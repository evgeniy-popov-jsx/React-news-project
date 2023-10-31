import { combineReducers } from 'redux';
import { weatherReducer } from './weather/weather-reducer';
import { themeReducer } from './theme/theme-reducer';

export const rootReducer = combineReducers({
    weatherReducer: weatherReducer,
    themeReducer: themeReducer,
})