import { Header } from "../components/Header";
import { Repo } from "../components/Repo";
import { User } from "../components/User";
import { RepoModal } from "../components/RepoModal";
import { Loading } from "../components/Loading";
import { useState } from "react";
//importando o contexto
import { useGithub } from "../contexts/GithubContext";

import sadmii from "../imgs/Sad-mii.png"


export function ReposList() {
    const [page, setPage] = useState<number>(1);
    // ve se o repo ta selecionado pra printar o modal ou nao 
    const [selectedRepo, setSelectedRepo] = useState<any | null>(null)
    //carregamento do modal
    const [isLoadingModal, setIsLoadingModal] = useState(false);
    const reposPerPage = 3;
    //recebe os dados do json pelo contexto
    const { user, repos } = useGithub();
    //se o usuario estiver null, emitir notificação
    if (!user) {
        return <div className="p-10 text-center text-xl">Nenhum usuário encontrado. Volte para o login!</div>;
    }


    const totalPages = Math.ceil(repos.length / reposPerPage);

    const firstIndex = (page - 1) * reposPerPage;
    const lastIndex = firstIndex + reposPerPage;

    const visibleRepos = repos.slice(firstIndex, lastIndex);

    //carregamento do modal
    const handleRepoClick = (repo: any) => {
        setIsLoadingModal(true); // Ativa o Mii girando

        setTimeout(() => {
            setIsLoadingModal(false); // Desativa o loading
            setSelectedRepo(repo);    // Abre o modal de especificações
        }, 2000);
    };

    return (
        <div >
            <Header />
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg mt-8 p-10">
                <h1 className="text-4xl font-bold text-gray-800 p-10 self-center">Informações do Perfil</h1>
                <User user={user} />
                <div className="flex justify-between items-center mb-8 ">
                    <h2 className="text-2xl font-bold text-gray-800 p-10 self-center">Repositórios</h2>
                    {/*Só mostra se tem repositorios */}
                    {repos.length > 0 && (

                        <div className="flex">
                            <p className="text-gray-500 text-sm p-3">{page} de {totalPages}</p>
                            <button className="w-9 h-9 rounded border border-gray-300 hover:bg-gray-100"
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                            > ← </button>

                            <button className="w-9 h-9 rounded border border-gray-300 hover:bg-gray-100"
                                onClick={() => setPage(page + 1)}
                                disabled={page === totalPages}
                            > → </button>
                        </div>
                    )}

                </div>



                {/* VERIFICAÇÃO SE TEM REPOSITÓRIOS OU NÃO */}
                {repos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-4">
                        {/* Coloque aqui o link da sua imagem ou um ícone */}
                        <img
                            src={sadmii}
                            alt="Sem repositórios"
                            className="w-32 h-32 opacity-50"
                        />
                        <p className="text-gray-500 text-lg font-medium">Este usuário ainda não possui nenhum repositório público.</p>
                    </div>
                ) : (
                    <div className="flex gap-8 overflow-x-auto pb-4">
                        {visibleRepos.map((repo) => (
                            <div
                                key={repo.id}
                                //selecionando o card do repo, tornado ele clicavel pra poder mostrar o modal
                                onClick={() => handleRepoClick(repo)}
                                className="cursor-pointer transition-transform hover:-translate-y-1"
                            >
                                <Repo
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                    visibility={repo.visibility}
                                    language={repo.language}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {isLoadingModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                   
                        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg min-h-[400px] flex flex-col justify-center items-center">
                            <Loading />
                        </div>
                    
                </div>
            )}
            {/* Modal renderizado na tela */}
            <RepoModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
        </div>


    )
}