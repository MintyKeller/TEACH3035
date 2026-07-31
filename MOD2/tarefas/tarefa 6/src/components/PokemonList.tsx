import { Pokemon } from "./Pokemon";
import { useEffect, useState} from "react";

interface IPokemon {
    name: string
}

export function PokemomList() {

    const [pokemons, setPokemons] = useState<IPokemon[]>([]);


    async function getAllPokemons() {
        await fetch ("https://pokeapi.co/api/v2/pokemon")
        .then ((response) => response.json())
        .then((json) => setPokemons(json.results));
    }

    useEffect(()=>{
        getAllPokemons()
    }, [])

    return (
        <ul className="py-6 flex flex-col gap-3">
          { //interpolação js
          pokemons.map((pokemon)=> (
            <li className="text-center">
                <Pokemon  name={pokemon.name}/>
            </li>
          ))

          }
        </ul>
    )
}