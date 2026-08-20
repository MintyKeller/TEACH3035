

interface Props {
    user: {
        avatar_url: string;
        name: string | null;
        login: string;
        bio: string | null;
    };
}

export function User ({ user }: Props) {
    return (
             <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl mb-8 border border-gray-100">
            {/* Foto de perfil */}
            <img 
                src={user.avatar_url} 
                alt={user.name || user.login} 
                className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-sm object-cover" 
            />
            
            {/* Informações textuais */}
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold text-gray-800">
                    {user.name || user.login}
                </h2>
                <span className="text-sm text-blue-600 font-medium">@{user.login}</span>
                <p className="text-gray-600 text-sm mt-1">
                    {user.bio || "Este usuário não possui uma biografia cadastrada."}
                </p>
            </div>
        </div>
    )
}