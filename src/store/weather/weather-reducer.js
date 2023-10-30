import { SET_WEATHER, SET_ERROR, SET_LOADING } from "./weather-actions";

const initialState = {
    status: 'idle',
    error: null,
    weather: [],

} 

export const weatherReducer = ( state = initialState, { type, payload }) => {
    switch(type){
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null,
            }
        case SET_WEATHER:
            return {
                ...state,
                status: 'received',
                weather: payload,
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload,
            }
        default: 
            return state;
    }
}