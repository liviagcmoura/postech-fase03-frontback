const BASE_URL = "http://localhost:3030/aulas";
const ALUNOS_URL = "http://localhost:3030/aulas/principal";

async function getAulas() {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data
    };
    // } else {
    //   setError(data.message || 'Erro ao importar aulas');
  } catch (err) {
    throw new Error(err, 'Falha na conexão');
  }
}

async function getAulasPrincipais() {
    try {
    const response = await fetch(ALUNOS_URL, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data
    };
    // } else {
    //   setError(data.message || 'Erro ao importar aulas');
  } catch (err) {
    throw new Error(err, 'Falha na conexão');
  }
}

export { 
  getAulas,
  getAulasPrincipais, 
};
