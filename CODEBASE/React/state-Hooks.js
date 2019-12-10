

const [yourState, setYourState] = useState(what it is by defult);
//NOTE best practice is when NO DEFULT to set a defult === type of data foir clerity
/*
array == []
obeject == {}
string = ""
number = 0

and so on
*/

//IN classes
constructor() {
  super();
  this.state = {
    gitHubData: {},
    followers: [],
  };
}

//CUSTOM HOOKS

//  1) IMPORT THE HOOK
import { useYourHook } from "./hooks/useYourHook";
// 2) add in place of state or other hook
const [state, setState] = useYourHook(start value);//was useState, now cutome hook
