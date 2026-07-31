import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; //importando o contexto

export const Page = () => {
    //recebendo do useContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>{/*mudando o id, trazendo o tema do useCOntent*/}
                    {/*se o tema for light, printar claro, se nao, printar escuro*/}
      <p>O modo <b>{theme === 'light' ? 'Claro' : 'Escuro'}</b> está ativado.</p>
      
      <button onClick={toggleTheme}>  {/* se o tema for light, enviar escuro, se nao, envair escuro*/}
        Mudar para modo {theme === 'light' ? 'Escuro' : 'Claro'}
      </button>
    </div>
  );
};