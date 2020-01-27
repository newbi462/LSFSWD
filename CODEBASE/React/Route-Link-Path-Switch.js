/*
1) INSTALL
npm install react-router-dom
*/

// 2) IMPORT
import { BrowserRouter as Router } from "react-router-dom";

// 3) wrap the <app/> on main index.js file
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
/* see base source
/home/omega/Desktop/CODE SCHOOL/UNIT2/React-Router-Basic-Nav
*/

// 4) use LINK ROUTE sets to define path and data to show
import { Link } from 'react-router-dom';

<div>
  {/*}<a href="">Home</a>*/}
  <Link to="/">Home</Link>
</div>
<div>
  {/*<a href="">About</a>*/}
  <Link to="/about">About</Link>
</div>
<div>
  {/*<a href="">Contact</a>*/}
  <Link to="/contact">Contact</Link>
</div>


// Route
import { Route } from 'react-router-dom';

<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />

//EXTERNAL
<Route
  path="/https://eager-meninsky-104020.netlify.com/"
  component={() => {
    window.location.href = "https://eager-meninsky-104020.netlify.com/";
    return null;
  }}
/>


//NEEDS PrivateRoute Funtion
<PrivateRoute path="/protected" component={NameOfComponCalled} />


//SWITCH
import { Switch } from "react-router-dom";

<Switch>
  <PrivateRoute path="/protected" component={FriendsList} />
  <Route path="/login" component={Login} />
  <Route component={Login} />
</Switch>
//RUNS UNTILL TRUE SO LAST ONE IS DEFULT
