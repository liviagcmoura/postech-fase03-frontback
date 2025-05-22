import { useState } from 'react';
import './Login.css'; 
import Logo from '../../components/Logo';

const decodeJWT = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return null;
  }
};

function Login() {
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3030/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, password }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        const decodedToken = decodeJWT(data.token);
        const userRole =  decodedToken?.role;
      

        window.location.href = userRole === 'Aluno' ? '/alunos' : '/';
      } else {
        setError(data.message || 'Nome de usuário ou senha incorretos. Tente novamente.');
      }
    } catch (err) {
      setError('Falha na conexão');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Logo></Logo>
        <h1>Login</h1>
        <p>Entre com sua conta para conferir o blog da Escola!</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Nome de usuário</label>
            <input
              id="username"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu usuário"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
