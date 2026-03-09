
import { CocktailType } from "@/app/types";

export const CocktailDetail = (params: {cocktail: CocktailType}) => {
    return (
        <div className="Cocktail">
            <img src={params.cocktail.strDrinkThumb} alt={params.cocktail.strDrink} />
            <h2>{params.cocktail.strDrink}</h2> 
            <p><strong>Category:</strong> {params.cocktail.strCategory}</p>
            <p><strong>Alcoholic:</strong> {params.cocktail.strAlcoholic}</p>
            <p><strong>Glass:</strong> {params.cocktail.strGlass}</p>
            <p><strong>Instructions:</strong> {params.cocktail.strInstructions}</p>
            <ul>
                <strong>Ingredients:</strong>
                {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => { 
                    const ingredient = params.cocktail[`strIngredient${index}` as keyof CocktailType];
                    return ingredient ? <li key={index}>{ingredient}</li> : null;
                }
                )}
            </ul>
        </div>
    );
}