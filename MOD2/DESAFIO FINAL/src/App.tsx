import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login";
import { ReposList } from "./pages/ReposList";
import { GithubProvider } from './contexts/GithubContext';
import './App.css';

function App() {
  
  return (
    <GithubProvider>
      <BrowserRouter>
        <Routes>
   
          <Route path="/" element={<Login />} />
          
          <Route path="/repos" element={<ReposList />} />
        </Routes>
      </BrowserRouter>
    </GithubProvider>

    


  );
}

export default App;
