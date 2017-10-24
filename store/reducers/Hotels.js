// import ItemsAction from '../actions/Items'
import Actions from "../actions/Actions";
// import {AsyncStorage} from 'react-native'

const INITIAL_STATE = {
    hotelList: []
}


function Hotels(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.HOTELS:

            console.log('HOTELS reducer')
            return Object.assign({}, state, { hotelList: action.value });
            break;
     



        default:
            return state;
    }
}

export default Hotels;