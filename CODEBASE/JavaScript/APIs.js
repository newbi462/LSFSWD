

/*
To use axios add to page
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
SEE AXIOS DOIC
https://github.com/axios/axios
*/

/*TO CALL API with AXIOS*/
axios.get("https://api.github.com/users/newbi462")
  .then(response => {
    //code to run
  })
  .catch(error => {
     console.log("The data was not returned", error)
  })
