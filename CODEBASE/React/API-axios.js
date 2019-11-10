
// 1) YOU NEED "useEffect" and "axios"
import React, {useState, useEffect} from "react";
import axios from "axios";

// INSTALL
/*
https://github.com/axios/axios

npm install axios
*/

// 2 useEffect to call the axios
useEffect(() => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=DEMO_KEY`)
  .then(response => {
    console.log(response.data.photos)
    setApiData(response.data.photos)
  })
  .catch( error => {
    console.log("sorry no dogs", error)
  })
},[])
// this [] it to prevent an infanate loop, if you need the axios to run again put the paramiter change that should triger new CALL
//FOR EXSAMPLE: if a STATE CHANGE will chane a var in the URL that STATE would go in the [], or [state]
