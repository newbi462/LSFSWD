// PASS PROPS TO ITENMS NOT ON TCALLED TO A PAGE

<Route render={() => <MyComponent someProp={someData} someOtherProp={moreData} />} />

// is pass PROPS NEEDED
<Route render={props => <MyComponent someProp={someData} someOtherProp={moreData} />

//MORE EXPLISIST
<Route render={(props) => (
  <MyComponent
    someProp={someData}
    someOtherProp={moreData}
    match={props.match}
    history={props.history}
    location={props.location}
  />
)} />

//Using SPREAD(...)
<Route render={(props) => (
  <MyComponent
    {...props}
    someProp={someData}
    someOtherProp={moreData}
  />
)} />

// more in practice exsamples
<Route
  path="/avengers/:id"
  render={props => <AvengerPage {...props} avengers={avengerData} /> } />
<Route
  path="/avengers"
  render={props => <AvengerList {...props} avengers={avengerData} />}
/>

/*
VS HOW YOU WOULD DO IF DUISPLAY ELEMNT
*/
import PageButtons from "./PageButtons";
<PageButtons propsName={number} setPropsName={setNumber}  />
