import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login";
import { ProfilePage } from "./pages/ProfilePage";
import { GithubProvider } from './contexts/GithubContext';
import { SpecificationsPage }  from './pages/SpecificationsPage';
import './App.css';

function App() {
  
  return (
    <GithubProvider>
      <BrowserRouter>
        <Routes>
   
          <Route path="/" element={<Login />} />
          
          <Route path="/repos" element={<ProfilePage />} />

           <Route
            path="/repos/:repoName"
            element={<SpecificationsPage />}
          />
          
        </Routes>
      </BrowserRouter>
    </GithubProvider>

    


  );
}

export default App;
