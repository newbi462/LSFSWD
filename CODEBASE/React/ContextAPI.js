//SEND FILE
// 1 ) need react-router-dom
import { Route } from 'react-router-dom';

// 2 inport the context file and make it:
import { YourContext } from "./contexts/YourContext";
//START TH CONTEXT FILE FILE
import { createContext } from 'react';

export const YourContext = createContext();
//END CONTEXT FILE

// 3 Render/Return the context pass
<YourContext.Provider value={{ state to pass by context }}>{/*why are these in contexts?*/}
	<Componet />//the component you are passing to
  // OR the rute
  <Route // OR the rute
		exact path="/"
		component={Componet}
	/>
</YourContext.Provider>



///IMPORT THE CONTEXT
import React, { useContext } from 'react';

//1 inport the context
import { YourContext } from "./contexts/YourContext";

const Componet = () => {
  // 2 use hook to inport like native to component state
	const { state to pass by context } = useContext(YourContext);
	// left must match how you passed in App in this case

	return (
		<>
			{ state to pass by context }
		</>
	);
};// 3 just call it like any state at this point based on what it is named above, you can rename and deconstrut if you wish by foobar provided matching format
