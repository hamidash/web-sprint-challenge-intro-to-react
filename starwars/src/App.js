import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Character from "./components/Character.js";
import Header from "./components/Header.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [movieData, setMovieData] = useState([]);

  useEffect(()=>{

    const fetchData = ()=>{
      axios
      .get('https://swapi.dev/api/people/')
      .then(response => {
        //console.log(response.data.results)
        setMovieData(response.data.results)
        
      })
    }
  
    fetchData();

  },[])

  console.log(movieData);

  
 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
    <div class="App">
      <Header />
      <Character movieData = {movieData} />
    </div>
  );
}

export default App;
