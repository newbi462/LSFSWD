/*styled-components
//SEE https://www.styled-components.com/docs/basics#getting-started

1) INSTALL TO YOUT PROJECT
npm install --save styled-components

*/

//  2) Import in the top of the file you are using it
import styled from "styled-components";

//  3) create the compont stile css rules
const YourCompnent = styled.div`/*DIV is the html tage you are replacing and the VarName is what you will call this tage in the below return*/
  display: flex
  flex-flow: row wrap;
  justify-content: space-around;
`;

//MAKE SURE YOU ARE ABOVE/OUTSIDE OF YOUR MAIN FUNTIONS
function App() {
  //
  return (
    <div></div>
    {/*BECOMES*/}
    <YourCompnent></YourCompnent>

    <img src="url" />
    {/*BECOMES*/}
    <YourCompnent />
  );
}

export default App;


//REACTSTARAP
//SEE https://reactstrap.github.io/
/*
THIS IS BOOT STRAP FOR REACT AND ALL THE "JOY" that goes with that, so
https://getbootstrap.com/docs/4.1/layout/overview/

the ReactStrap site has aplet object temps
https://reactstrap.github.io/components/

1) INSTALL it and bootstrap to project
npm install --save bootstrap
npm install --save reactstrap

*/

/*  2) add bootstrap to your main index.js
import "bootstrap/dist/css/bootstrap.min.css";
*/


//  3) In the file you are working on import the elmints the compnt you are using and copy it s code from https://reactstrap.github.io/components/
import { Jumbotron } from "reactstrap";


function App() {
  return (
    <div className="App">
{/*START COMPONENT*/}
      <Jumbotron>
        <img className="logo" src={logo} alt="studio ghibli official logo" />
        <h1>API</h1>
      </Jumbotron>
{/*END COMPONENT    SEE HOW "Jumbotron" was imported from react starap above*/}
    </div>
  );
}

export default App;
