const initialState = {
  initalStateKey: 0,
};

export const yourReducer = (state = initialState, action) => {//STEP 7: state = initialState to pass to STORE on load
  console.log(state, action);
  switch (action.type) {
    case "YOUR_IFCASE_TEST_TEXT_KEY"://the key passed by the action 
      return {
        //
      };
      //return state;
    default:
      return state;
  }
};
