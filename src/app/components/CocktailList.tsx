import { Drinks } from "../types";
import { Cocktail } from "./Cocktail";

export const CocktailList = (params: { drinks: Drinks }) => {

    const cocktails = params.drinks?.drinks || [];

    return (
        <div className="CharacterList">
            {cocktails.map((cocktail) => (
                <div key={cocktail.idDrink} className="CharacterCard">
                    <Cocktail cocktail={cocktail} />
                </div>
            ))}
        </div>
    );
};