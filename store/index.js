import { createStore } from 'redux'
//Update in counter 9 -- import combineReducers to combine all reducers
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Login from './reducers/Login';
import CurrentLoc from './reducers/CurrentLoc';
import Restaurants from './reducers/Restaurants';
import Hotels from './reducers/Hotels';
import Parks from './reducers/Parks';
import Hospitals from './reducers/Hospitals';

//Update in counter 13 -- call applyMiddleware
const middleware = applyMiddleware(thunk);


//Update in counter 9 -- this will combine all reducers in one
export const rootReducer = combineReducers({
  Login, CurrentLoc, Restaurants,Hotels,Parks,Hospitals
 
  //  removeItems 
// more reducers go here
})
//Update in counter 9 -- passing root reducer
//Update in counter 13 -- pass middleware in createStore
let store = createStore(
 rootReducer ,
  middleware
)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
