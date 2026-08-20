interface Props {
    name: string;
    description: string;
    html_url: string;
    visibility: string;
    language: string;
}

export function Repo({ name, description, html_url, visibility, language }: Props) {
    return (
        <div className="border border-gray-100 p-5 rounded-2xl shadow-md bg-white min-w-[300px] max-w-[350px] flex flex-col justify-between ml-10" >
            <div className="p-6 border-b-2 border-black">
                <h2 className="font-bold text-xl text-slate-800">
                    {name} 
                </h2>
            </div>
            <div className="p-6 space-y-6">
                <div className="bg-gray-100 rounded-xl p-4">
                    <h2 className="text-sm text-gray-400">Link:</h2>
                    <a href={html_url} target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 underline break-all">{html_url}</a>
                </div>
                <div className="bg-gray-100 rounded-xl p-4">
                    <h2 className="text-sm text-gray-400">Descrição:</h2>
                    <p className="text-slate-700 truncate">{description || "Sem descrição disponível."}</p>
                </div>


            </div>

        </div>
    )
}