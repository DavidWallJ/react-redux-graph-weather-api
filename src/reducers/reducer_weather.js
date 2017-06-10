/**
 * Created by david on 5/19/17.
 */
import { FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);
            // we use concat here instead of push because we don't want to change the value of state
            // instead concat creates a new array from the original state array
            // ES6 style would be '[ action.payload.data, ...state ]'
    }

    return state;
}