import { PokemomList } from "./PokemonList";

export function Main() {
    return (
        <main className="mx-56 my-4 ">
            <header className="">
                <h1 className="font-bold text-3xl">Pokémons!</h1>
                <hr className="my-4"/>
            </header>
            <PokemomList/>


        </main>
    )
}