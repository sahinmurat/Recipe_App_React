import React , {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Recipe from './Recipe';
require('dotenv').config()

const App = () =>{

  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY
  console.log('process.env: ' + JSON.stringify(process.env))
  console.log('process.env: ' + process.env.NODE_ENV)
  const [recipies, setRecipies] = useState([]);

  // useEffect(async ()=>{
  //   getRecipies()
  // }, [])

  // const getRecipies = async () =>{
  //   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const data = await response.json();
  //   console.log(data.hits)
  // }

  useEffect(()=>{
    getRecipies();
  },[])

  const getRecipies = async ()=>{
    const response = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipies(response.data.hits);
    console.log(response.data.hits)
  }

  return(
    <div className='App'>
      <h1>Hello React</h1>
      <h1>{process.env.REACT_APP_ID}</h1>
      <form className='search-form'>
       <input className='search-bar' type= 'text'/>
       <button
       className='search-button' 
       type= 'submit'>Search</button>
      </form>
     {recipies.map(recipe => <Recipe recipe = {recipe.recipe} /> )}
    </div>
  )
}

export default App;
