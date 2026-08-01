
import mii from "../imgs/Mii.png"

export function Loading() {
    return (
     <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <img src={mii} alt="Carregando..."className="w-40 h-40 animate-spin [animation-duration:2s]"/>
            <p className="text-gray-700 font-medium text-lg">Carregando...</p>
        </div>
    )
}  