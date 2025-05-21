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

// async function criarAula(aulaData) {
//   try {
//     const response = await fetch(BASE_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(aulaData)
//     });
//     const data = await response.json();
//     if (response.ok) {
//       return data;
//     }
//     throw new Error(data.message || 'Erro ao criar aula');
//   } catch (err) {
//     throw new Error(err.message || 'Falha na conexão');
//   }
// }

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

// async function editarAula(aulaId, aulaData) {
//   try {
//     const response = await fetch(`${BASE_URL}/${aulaId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(aulaData)
//     });
//     const data = await response.json();
//     if (response.ok) {
//       return data;
//     }
//     throw new Error(data.message || 'Erro ao editar aula');
//   } catch (err) {
//     throw new Error(err.message || 'Falha na conexão');
//   }
// }

// async function removerAula(aulaId) {
//   try {
//     const response = await fetch(`${BASE_URL}/${aulaId}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     });
//     const data = await response.json();
//     if (response.ok) {
//       return data;
//     }
//     throw new Error(data.message || 'Erro ao remover aula');
//   } catch (err) {
//     throw new Error(err.message || 'Falha na conexão');
//   }
// }

export { 
  getAulas,
  getAulasPrincipais, 
  // criarAula,
  lerAula,
  // editarAula,
  // removerAula
};
