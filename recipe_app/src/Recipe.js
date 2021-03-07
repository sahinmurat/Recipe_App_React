import React from 'react';
import style from './recipe.module.css'

const Recipe = ({recipe})=>{

    return(
        <div className={style.recipe} >
            <h1 >{recipe.label}</h1>
            <ol>
                {recipe.ingredients.map(ing =>(
                    <li>{ing.text}</li>
                ))}
            </ol>
            <p><span>Calory</span> : {recipe.calories} kcal</p>
            <img className={style.image} src= {recipe.image} />
        </div>
    )
}

export default Recipe

