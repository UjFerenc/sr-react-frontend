import './App.scss';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout';
import { createContext, useState } from 'react';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Lore from './Pages/Lore/Lore';
import Profile from './Pages/Profile/Profile';
import CharacterCreation from './Pages/Profile/CharacterCreation/CharacterCreation';

export const LoginContext = createContext(false);


function App() {
  let [loggedIn, setLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='login'element={<Login />}/>
              <Route path='register'element={<Register />}/>
              <Route path='lore' element={<Lore />}/>
              <Route path='profile'>
                <Route path='' element={<Profile />} />
                <Route path='character-creation' element={<CharacterCreation />}/>
              </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
