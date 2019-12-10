import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SearchForm( props ) {
{/*SEARCH STATE*/}
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/${props.slash}/`)
    .then(response => {
{/*SEARCH THEN CALL FILTER*/}
      const inSearchBar = response.data.results.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      props.setState(inSearchBar);

    })
    .catch( error => {
      console.log("error", error.message)
    })
  },[searchValue])

{/*SEARCH CB ON VALUE CHANGE*/}
  const newLetterEntered = event => {
    setSearchValue(event.target.value);
  };


  return (
    <section className="search-form">
    {/*// Add a search form here*/}

{/*SEARCH VALUE FORM*/}
      <form className="search">
        <input
          type="text"
          onChange={newLetterEntered}
          value={searchValue}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>

    </section>
  );
}
