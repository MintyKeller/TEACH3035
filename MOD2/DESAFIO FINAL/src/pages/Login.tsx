import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGithub } from '../contexts/GithubContext';

import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { Loading } from "../components/Loading";



export function Login() {

    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { setUser, setRepos } = useGithub();

    const navigate = useNavigate();

    //REQUISIÇÃO DO API 
    //nossa função assíncrona
    const handleSearch = async () => {

        if (!username.trim()) { //testando se o campo esta vazio, null, pq dai eh false
            setError('O campo de usuário não pode estar vazio.');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {                                   //lança os dois fetchs ao mesmo tempo
            const [userResponse, reposResponse] = await Promise.all([
                fetch(`https://api.github.com/users/${username}`), //procura o usuario
                fetch(`https://api.github.com/users/${username}/repos`) // procura os repositorios do usuario
            ]);

            //tratando o erro, se a pagina nao estiver ok
            if (!userResponse.ok) {
                throw new Error('Usuário não encontrado');
            }

            //convertendo as respostas do fecth pra arquivos json
            const userData = await userResponse.json();
            const reposData = await reposResponse.json();

            //seta o estado, com os arquivos json
            setUser(userData);
            setRepos(reposData);
            //redireciona pra RepoList
            navigate('/repos');

            

        } catch (err) {
            setError('Ops! Não conseguimos encontrar esse usuário do Github.');
        } finally {
            setIsLoading(false);
        }
    };


    return (

        <div className="min-h-screen flex">
            <div className="w-1/2 bg-black flex justify-center items-center">
                <Logo />
            </div>


            <div className="w-1/2 flex flex-col justify-center items-center relative">
                {/* CAIXINHA DE MENSAGEM DE ERRO*/}
                {error && (
                    <div className="absolute top-10 bg-red-500 text-white p-3 rounded-md">
                        {error}
                    </div>
                )}

                {/**/}

                {/*OPERACIONAL TERNARIO, SE ESTIVER CARREGANDO IMPRIME O COMPONENTE DE LOADING, SE NAO O INPUT */}
                {isLoading ? (
                    <Loading />
                ) : (
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} onClickBotao={handleSearch} isLoading={isLoading} />
                )}


            </div>
        </div>




    )

}


