import logo from "../imgs/GitHub-logo.webp"


export function Header() {
    return (
        <div className="bg-black flex p-5">
                <img src={logo} alt="Logo do GitHub" className="w-8 h-8 ml-2"/>
                <h1 className="text-2xl font-bold text-white ml-5" >Talira's GitHub</h1>

        </div>
    )
}