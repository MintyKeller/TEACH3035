import { useParams } from "react-router-dom";
import { useGithub } from "../contexts/GithubContext";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";




export function SpecificationsPage() {
    const { repoName } = useParams();
    //pega o nome das repos puxadas, como uma lista
    const { repos } = useGithub();
    //procura a repo clicada que nos direcionou para aqui
    const repo = repos.find((repo) => repo.name === repoName);
    //
    const navigate = useNavigate();

    //verifica se a repo nao foi encontrada
    if (!repo) {
        return (
            <div className="p-10 text-center">
                Repositório não encontrado.
            </div>
        );
    }

    return (
        <PageContainer>

            <div className="max-w-5xl mx-auto mt-10 bg-white rounded-lg  shadow-lg p-10">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-8">Especificações</h2>

                    <button onClick={() => navigate("/repos")} className="text-[32px] font-light leading-none text-gray-300 hover:text-gray-400 transition-colors"> x </button>
                </div>
                <div className=" max-w-4xl mx-auto mt-10 bg-white rounded-lg  shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-10">
                    <div className="max-w-xl mx-auto">

                        <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <h3 className="text-xl font-bold text-gray-800">
                                {repo.name}
                            </h3>
                        </div>

                        <div className="flex flex-col gap-4">

                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <span className="text-xs text-gray-400 block mb-1">
                                    Link
                                </span>

                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline text-sm break-all font-medium"
                                >
                                    {repo.html_url}
                                </a>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <span className="text-xs text-gray-400 block mb-1">
                                    Privacidade
                                </span>

                                <span className="text-gray-700 text-sm font-medium capitalize">
                                    {repo.visibility === "public" ? "Público" : "Privado"}
                                </span>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <span className="text-xs text-gray-400 block mb-1">
                                    Linguagem
                                </span>

                                <span className="text-gray-700 text-sm font-medium">
                                    {repo.language || "Não especificada"}
                                </span>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <span className="text-xs text-gray-400 block mb-1">
                                    Descrição
                                </span>

                                <p className="text-gray-700 text-sm">
                                    {repo.description ||
                                        "Nenhuma descrição fornecida para este repositório."}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}