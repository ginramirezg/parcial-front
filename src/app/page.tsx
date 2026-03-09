'use client'

import { useState } from "react";
import { Drinks } from "./types";
import { searchCocktails, getRandomCocktail } from "./lib/utils";
import { CocktailList } from "./components/CocktailList";
import { useRouter } from "next/navigation";

export default function Home() {

  const [drinks, setDrinks] = useState<Drinks | null>(null);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const router = useRouter();

  const Search = () => {

    setLoading(true);

    searchCocktails(query)
      .then((res) => {
        setDrinks(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const RandomCocktail = async () => {

    const cocktail = await getRandomCocktail();

    router.push(`/cocktail/${cocktail.idDrink}`);
  };

  return (
    <div className="Home">

      <h1>Buscador de Cocktails</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={Search}>
        Buscar
      </button>

      <button onClick={RandomCocktail}>
        Dime algo bonito
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {drinks && <CocktailList drinks={drinks} />}

    </div>
  );
}