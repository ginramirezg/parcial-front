import { searchAPI} from "./api";
import { CocktailType, Drinks } from "@/app/types";



export const searchCocktails = async (query: string) => {
    const response = await searchAPI.get<Drinks>(`search.php?s=${query}`);
    return response.data;
};

export const getCocktailById = async (id: string) => {
    const response = await searchAPI.get<Drinks>(`lookup.php?i=${id}`);
    return response.data.drinks?.[0] || null;
};

export const getRandomCocktail = async () => {
    const response = await searchAPI.get<{drinks: CocktailType[]}>(`random.php`);
    return response.data.drinks[0];
};