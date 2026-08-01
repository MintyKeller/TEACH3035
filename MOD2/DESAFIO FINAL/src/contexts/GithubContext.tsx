import React, { createContext, useState, useContext } from 'react';

//props
export type GithubContextType = {
    user: {
        avatar_url: string;
        name: string;
        bio: string;
        login: string;
    } | null;
    
    repos: Array<{
        id: number;
        name: string;
        description: string;
        html_url: string;
        visibility: string;
        language: string;
    }>;

    setUser: (user: any) => void;
    setRepos: (repos: any[]) => void;
};

//contexto 
export const GithubContext = createContext<GithubContextType | undefined>(undefined);

export function GithubProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<GithubContextType['user']>(null);
    const [repos, setRepos] = useState<GithubContextType['repos']>([]);

    return (
        <GithubContext.Provider value={{ user, repos, setUser, setRepos }}>
            {children}
        </GithubContext.Provider>
    );
}

// Hook personalizado para facilitar o uso do contexto nas páginas
export function useGithub() {
    const context = useContext(GithubContext);
    if (!context) {
        throw new Error("useGithub deve ser usado dentro de um GithubProvider");
    }
    return context;
}


// import { useContext } from 'react';
// import { GithubContext } from '../context/GithubContext';

// // Dentro do seu componente:
// const context = useContext(GithubContext);
// if (!context) {
//     throw new Error("Erro...");
// }
// const { user, repos } = context;

