import './App.scss';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout';
import { createContext, useState } from 'react';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

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
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;