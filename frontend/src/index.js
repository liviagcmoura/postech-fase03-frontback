import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './rotas/Home';
import HomeAlunos from './rotas/HomeAlunos.js';
import Perfil from './rotas/Perfil';
import Login from './rotas/Login/Login.js';
import Admin from './rotas/Admin.js';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import PrivateRoute from './rotas/PrivateRoute.js';
import Logout from './rotas/Logout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sair" element={<Logout />} />

        <Route path="/unauthorized" element={<h1>Acesso não autorizado</h1>} />

        <Route path="/" element={
          <PrivateRoute allowedRoles={['Professor', 'Aluno']}>
            <Home />
          </PrivateRoute>
        } />

          <Route path="/home" element={
          <PrivateRoute allowedRoles={['Professor', 'Aluno']}>
            <Home />
          </PrivateRoute>
        } />

        <Route path="/alunos" element={
          <PrivateRoute allowedRoles={['Aluno']}>
            <HomeAlunos />
          </PrivateRoute>
        } />

        <Route path="/admin" element={
          <PrivateRoute allowedRoles={['Professor']}>
            <Admin />
          </PrivateRoute>
        } />
        <Route path="/perfil" element={
          <PrivateRoute allowedRoles={['Professor', 'Aluno']}>
            <Perfil />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
