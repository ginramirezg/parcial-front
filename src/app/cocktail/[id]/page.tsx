
'use client';

import { useEffect, useState } from "react";
import {useParams} from "next/navigation";
import { CocktailType } from "@/app/types";
import { getCocktailById } from "@/app/lib/utils";
import { AxiosError } from "axios";
import { CocktailDetail } from "@/app/components/CocktailDetail";
import Link from "next/link";


export default function CocktailPage() {
 
    const [cocktail, setCocktail] = useState<CocktailType | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {

        getCocktailById(id)
            .then((res)=>{
                setCocktail(res)
            })
            .catch((error:AxiosError)=>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [id])

    return(

    
        <div>


             <Link href="/">
                <button>
                    Pagina principal
                </button>
            </Link>


            { !cocktail && loading && <p>Loading...</p>}
            {!loading && !error && cocktail && <CocktailDetail cocktail={cocktail}/>}
            {error && <p>Error: {error.message}</p>}

        </div>
    )
}