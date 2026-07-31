import  { createContext, useState, ReactNode } from 'react';
//react  node: qualquer valor

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
};
//criando o contexto
export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

                                                    //tipando o parametro com o react node
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light'); //use state

  const toggleTheme = () => { // função toggle pra inverter o tema
    setTheme(() => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    //o retonro, com o theme e o theme provider, levando thema e a função
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};