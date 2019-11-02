
//DOM = Document Object Model

/*MAKE AN ELEMANT*/
const cardInfo = document.createElement('div');// dic, p , what ever html tag

/*GET AN ELMENT*/
const mainNav = document.querySelector('.main-navigation');


/*EVENT LISTNERS*/

//  mouseover
mainNav.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'black';
})
mainNav.addEventListener('mouseleave', (event) => {
  event.target.style.backgroundColor = 'white';
})


//  dblclick
const darkmode = document.querySelector('body');
darkmode.addEventListener('dblclick', (event) => {
  event.target.style.backgroundColor = 'black';//exicute by event parmameter in arror
  mainNav.style.backgroundColor = 'black';///exicute by var
})


/*EDIT OR APEND OBJECT*/
//CSS CLASS
cardInfo.classList.add('theclass to add');

//TEXT CONTENT
cardInfo.textContent = "text to to element";

// ADD TO A PARENT ELEMENT
parentToAddTo.appendChild(childToAdd);

// edidit or add sub elments
varNam.src = "the url for the img src pic";
varNamorAtag.href = "link URL";
// and SUB TAG OTHER THAN CLAS OR ID BASICALY





/*COMPONENTS*/
function comonentName(paramiterComonetNeeds) {
  //DOM CODE TO BUILT THE COMPONENT

  return thecomponent;
}
