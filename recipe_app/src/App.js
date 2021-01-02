import React , {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Recipe from './Recipe';

const App = () =>{

  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(()=>{
    getRecipies();
  },[query])

  const getRecipies = async ()=>{
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipies(response.data.hits);
    console.log(response.data.hits)
  }
  // const getRecipies = async () =>{
  //   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const data = await response.json();
  //   console.log(data.hits)
  // }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return(
    <div className='App'>
      <h1 className='title' >Which Recipe Do You Need?</h1>
      <form 
       className='search-form'
       onSubmit = {getSearch}>
       <input 
       className='search-bar' 
       type= 'text' 
       value = {search}
       onChange = {updateSearch} />
       <button
       className='search-button' 
       type= 'submit'>Search</button>
      </form>
      <div className='recipes' >
     {recipies.map(recipe => <Recipe recipe = {recipe.recipe} /> )}
     </div>
    </div>
  )
}

export default App;
