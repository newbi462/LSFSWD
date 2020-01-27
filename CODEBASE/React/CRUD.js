/*
.post
.get
.put
.delete

So ya CRUD is more a "concept" than command acronym:
create
read
update
delete

*/

//create
const addCreateFuntion = (event) => {
  event.preventDefault();// when part of a FROM this is needed to prevent defaults

  axiosWithAuth()
    .post(`/URL`, whatYouWillPost)
    .then(response => {
      console.log(response)
      setUpdate(so state will refrsh);
    })
    .catch( error => {
      console.log("error", error.message)
    })
};

//read
useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response));

  }, [update]);

//update
const handleSubmit = (event) => {
  event.preventDefault();
  // do my put to do the update
  axios
    .put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
    .then(responce => {
      console.log(responce.data);

      //remeber to update state so it will refresh
      props.setUpdate(responce.data);

      // redirect route to the ITEM PAGE on submit
      props.history.push(`/movies`);
    })
    .catch(err => console.log(err));
};

//delete
const deleteFuntion = (event) => {
  axiosWithAuth()
    .delete(`movies/${this.state..id}`) //the key for what you want to DEL because like get works once sent
    .then(res => {
      setUpdate(so state will refrsh);

      props.history.push("/URLTOGoTo");// then push back to after done URL
    })
    .catch(err => console.log(err));
};
