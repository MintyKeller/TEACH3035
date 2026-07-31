
import { ThemeProvider } from './contexts/ThemeContext';
import { Page } from './components/Page';
import './App.css';

const App = () => {
  return (
    <ThemeProvider> {/*Trazendo o provider do use context, que tem q envolver tudo*/}
      <Page /> {/*nosso componente principal*/}
    </ThemeProvider>
  );
};

export default App;