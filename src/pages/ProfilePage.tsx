
import { Repo } from "../components/Repo";
import { User } from "../components/User";
import { Loading } from "../components/Loading";
import PageContainer from "../components/PageContainer";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
//importando o contexto
import { useGithub } from "../contexts/GithubContext";

import sadmii from "../imgs/Sad-mii.png"


export function ProfilePage() {
    const [page, setPage] = useState<number>(1);
    const [isLoadingModal, setIsLoadingModal] = useState<boolean>(false);

    const reposPerPage = 3;
    //recebe os dados do json pelo contexto
    const { user, repos } = useGithub();

    const navigate = useNavigate();

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
            navigate(`/repos/${repo.name}`);
        }, 2000);
    };

    return (

        <PageContainer>

            {isLoadingModal ? (
                <Loading />
            ) : (
                <div >

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
                                        // Ao clicar no card, vai para a tela de especificações
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
                </div>
            )}

        </PageContainer>



    )
}