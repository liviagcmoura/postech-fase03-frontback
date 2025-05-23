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
  } catch (err) {
    throw new Error(err, 'Falha na conexão');
  }
}


async function lerAula(aulaId) {
  try {
    const response = await fetch(`${BASE_URL}/${aulaId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(data.message || 'Erro ao buscar aula');
  } catch (err) {
    throw new Error(err.message || 'Falha na conexão');
  }
}

export { 
  getAulas,
  getAulasPrincipais, 
  lerAula,
};
