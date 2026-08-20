import logo from "../imgs/GitHub-logo.webp"


export function Logo() {
    return (
        <div className="  flex text-white">
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo do GitHub" className="w-10 h-10"/>
                <h1 className="text-4xl font-bold " >Talira's GitHub</h1>
            </div>
        </div>
    )
}