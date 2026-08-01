import React from 'react';

//props do input
interface Props {
    value: string;
    //
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    onClickBotao: () => void;
    isLoading: boolean;
}

//passando as props
export function Input({ value, onChange, placeholder = "Digite aqui seu usuário do Github...", onClickBotao, isLoading}: Props) {




    return (
        <div className=" flex flex-col  gap-2">
            <h1 className="text-5xl font-bold text-gray-800 p-10 self-center">Entrar</h1>
            <h2 className="text-sm text-gray-700" >Usuário</h2>
            <input
                type="text"
                className="w-96 h-12 border border-gray-300 rounded-md px-4"
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
            <br />                                                                                               {/*desabilita o botao quando a pagina ta carregando */}
            <button className="w-96 h-12 bg-black text-white rounded-md font-semibold" onClick={onClickBotao} disabled={isLoading} >{isLoading ? 'Carregando...' : 'Entrar'}</button>
        </div>                                                                                                                                         //imprime carregando no botao, ou entrar se nao estiver carregando
    )
}