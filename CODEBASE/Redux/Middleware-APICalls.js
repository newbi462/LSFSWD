// STEP 1 IMPORT REDUC AND SO BASE SET UP

// IN THE INDEX.JS file of the app
//STEP 2: add dependancies to Index.js
import { createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';// THIS IS THE ONE THAT LETS YOU USE A FUNTION TO DO THE AXIOS

// STEP 3: change your store
import { yourReducer } from "./reducers/yourReducer";
const store = createStore(
  yourReducer,
  applyMiddleware(thunk),//add the middle ware and "thunk"
  //composeEnhancers(applyMiddleware(logger))
);
// the rest of the index.js is the same


//YOUR ACTION CALL (the Actions you pass to the bottom reduc funtion)
import axios from 'axios';

export const getApiActions = () => dispatch => {
  dispatch({ type: "GET_API" });
  axios
    .get('https://api.exchangerate-api.com/v4/latest/USD')
    .then(result => {
      console.log(result.data.rates);
      dispatch({ type: "RETURN_API_DATA", payload: result.data.rates });
    })
    .catch(error => {
      dispatch({ type: "GET_FAILURE", payload: error.response });
    });
};
// Axios logic is the same you just pass it to your Reducer to set the state and so on...
// NOTE how each PHASE has its own TYPE, this is to simulate asyink but it is not true asink as it will loop with out condition hard coded logic to stop it
