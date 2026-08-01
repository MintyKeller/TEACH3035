interface Props {
    repo: {
        name: string;
        description: string;
        html_url: string;
        visibility: string;
        language: string;
    } | null;
    onClose: () => void;
}

export function RepoModal({ repo, onClose }: Props) {
    if (!repo) return null;

    return (
        
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
           
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 relative animate-in fade-in zoom-in-95 duration-200">
                
                
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h3 className="text-xl font-bold text-gray-800">{repo.name}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl font-bold px-2 rounded-lg hover:bg-gray-100 transition-colors"> ✕</button>
                </div>


                <div className="flex flex-col gap-4">
                    
              
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <span className="text-xs text-gray-400 block mb-1">Link</span>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm break-all font-medium">{repo.html_url}</a>
                    </div>

             
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <span className="text-xs text-gray-400 block mb-1">Privacidade</span>
                        <span className="text-gray-700 text-sm font-medium capitalize">
                            {repo.visibility === 'public' ? 'Público' : 'Privado'}
                        </span>
                    </div>

   
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <span className="text-xs text-gray-400 block mb-1">Linguagem</span>
                        <span className="text-gray-700 text-sm font-medium">
                            {repo.language || "Não especificada"}
                        </span>
                    </div>

    
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <span className="text-xs text-gray-400 block mb-1">Descrição</span>
                        <p className="text-gray-700 text-sm">
                            {repo.description || "Nenhuma descrição fornecida para este repositório."}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}