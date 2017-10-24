import Actions from "../actions/Actions";


const INITIAL_STATE = {
  loggedInUser: 0
}


function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.LOGIN:

      return Object.assign({}, state, { loggedInUser: action.value });
      break;

    default:
      return state;
  }
}

export default Login;