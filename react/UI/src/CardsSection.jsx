import React from "react";
import axios from axios;
import Cards from "./components/Card";
import { useState } from "react";
import { useEffect } from "react";
// import "./assets/style/CardsSection.scss";
function CardsSection() {
  const [film, setFilm] = useState({});
  let films = [];

 useEffect(() => {
  axios("https://www.omdbapi.com/?s=batman&apikey=89d99056").then((res) => {
    films = res.data.Search;
  });
  
 }, [])
 
  films && films.map((film) => {
    return <Cards film={film} />;
  });
}

export default CardsSection;
