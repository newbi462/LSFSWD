// STEP 1:
//npm install react-redux redux

//STEP 2: // 2) import to create state/store
import { createStore } from "redux";

//STEP 3: // 3) - create the redux store createStore(reducer), and make your reducer
import { yourReducer } from "./reducers/yourReducer";
const store = createStore(yourReducer);
//START REDUCER
const initialState = {
  initalStateKey: 0,
};

export const yourReducer = (state = initialState, action) => {//STEP 7: state = initialState to pass to STORE on load
  console.log(state, action);
  switch (action.type) {
    case "YOUR_IFCASE_TEST_TEXT_KEY":
      return {
        //
      };
      //return state;
    default:
      return state;
  }
};
//END REDUCER



//STEP 4: in the INDEX.js // 4) wrap <App /> in </Provider>
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//HOOK THE STATE TO THE APP
//STEP 5: //Step 5 (see index for 1 to 4) add conect(), to the Component or App file you want to hook the STATE STORE TO
import { connect } from "react-redux";

const App = (props) => {// can be any componet just using App as an exsample

  return (
    <>
      {props.yourKey}{/*SEE mapStateToProps() below */}
    </>
  );
};

//STEP 6: // 6) pair for above like with Formik

//export default App;

const mapStateToProps = state => {// mapStateToProps is a function that we define
  //NOTE (state) paramiter is your STORE STATE you imported in the reduser
  console.log(state);
  return {
    // 8) (see reducer for step 7)
    yourKey: state.initalStateKey,// this (state) is the foobar above named in index for the store, stick with convention
  }; // thesese are the props, like with Formik must manulay list
};

export default connect(
  mapStateToProps,
  { yourActions }// import your actions here to make them acesable
)(App); // function cyou are doing this do see above
//can add props here to see the onClick= above
