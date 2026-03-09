import { CocktailType} from "@/app/types";
import Link from "next/link";

export const Cocktail = (params: {cocktail: CocktailType}) => {
    return (
        <div className="Cocktail">
            <h2>{params.cocktail.strDrink}</h2>
            <Link href={`/cocktail/${params.cocktail.idDrink}`}>
                 <img src={params.cocktail.strDrinkThumb} alt={params.cocktail.strDrink} />
            </Link>
        </div>
    );
}