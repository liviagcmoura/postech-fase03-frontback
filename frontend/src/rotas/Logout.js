import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.clear();
    const timer = setTimeout(() => {
      navigate('/login');
    }, 4000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div style={{ color: 'black ', textAlign: 'center', marginTop: '20%' }}>
      <h2>Você saiu com sucesso.</h2>
      <p>Redirecionando para o login...</p>
    </div>
  );
}

export default Logout;
