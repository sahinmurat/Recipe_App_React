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
            <p>{recipe.calories}</p>
            <img className={style.image} src= {recipe.image} />
        </div>
    )
}

export default Recipe

// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0:
// bookmarked: false
// bought: false
// recipe:
// calories: 4228.043058200812
// cautions: ["Sulfites"]
// dietLabels: ["Low-Carb"]
// digest: (26) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// healthLabels: (2) ["Peanut-Free", "Tree-Nut-Free"]
// image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
// ingredientLines: (10) ["1/2 cup olive oil", "5 cloves garlic, peeled", "2 large russet potatoes, peeled and cut into chunks", "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)", "3/4 cup white wine", "3/4 cup chicken stock", "3 tablespoons chopped parsley", "1 tablespoon dried oregano", "Salt and pepper", "1 cup frozen peas, thawed"]
// ingredients: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// label: "Chicken Vesuvio"
// shareAs: "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken"
// source: "Serious Eats"
// totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
// totalNutrients: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
// totalTime: 60
// totalWeight: 2976.8664549004047
// uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6"
// url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html"
// yield: 4