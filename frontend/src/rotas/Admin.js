import styled from "styled-components";
import { getAulas } from "../servicos/Aulas";
import { useEffect, useState } from "react";
import { Titulo } from "../components/Titulo";
import HeaderAdmin from "../components/HeaderAdmin";
import BotaoEditar from "../components/BotaoEditar";
import BotaoDeletar from "../components/BotaoDeletar";
import { Link } from "react-router-dom";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, rgb(82, 0, 51) 35%, #326589 165%);
`;

const Aulas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
    color: #ffff;
    font-size: 18px;
    justify-content: left;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const NovaAulaContainer = styled.section`
  background-image: linear-gradient(90deg, rgb(82, 0, 51) 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 15px 0;
  height: 150px;
  width: 100%;
`;

const TituloAdmin = styled.h2`
  color: #fff;
  font-size: 35px;
  text-align: center;
  width: 100%;
`;

// const LinkNovaAula = styled.link`
//   font-size: 20px;
//   font-weight: 400;
//   margin-bottom: 40px;
// `;

function Admin() {
  const [aulas, setAulas] = useState([]);
  useEffect(() => {
    fetchAulas();
  }, []);

  async function fetchAulas() {
    const aulasDaAPI = await getAulas();
    setAulas(aulasDaAPI);
  }

    // Funções de manipulação (handlers)
  const handleEdit = (aulaId) => {
    console.log('Editar aula:', aulaId);
    // Adicione sua lógica de edição aqui (ex: abrir um modal, redirecionar, etc.)
  };

  const handleDelete = (aulaId) => {
    console.log('Deletar aula:', aulaId);
    // Adicione sua lógica de exclusão aqui (ex: chamar API, atualizar estado, etc.)
    // Exemplo com confirmação:
    if (window.confirm('Tem certeza que deseja excluir esta aula?')) {
      // Lógica para deletar (ex: chamar API e atualizar `aulas`)
      // setAulas(aulas.filter(aula => aula.id !== aulaId));
    }
  };

  const token = localStorage.getItem('token') || null;

return (
  <AppContainer>
    <HeaderAdmin />

    <NovaAulaContainer>
      <TituloAdmin>Olá, prof!</TituloAdmin>
      <Link to="/postar">Postar nova aula</Link>
    </NovaAulaContainer>

    <Titulo>TODAS AS AULAS</Titulo>
    {token
      ? aulas.map((aula) => {
          console.log(aula);
          return (
            <Aulas key={aula.id}> 
              <div>
                <p>{aula.titulo}</p> 
                <p>{aula.disciplina}</p>
                <p>{aula.autor.nome}</p>
                
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <BotaoEditar onClick={() => handleEdit(aula.id)} />
                  <BotaoDeletar onClick={() => handleDelete(aula.id)} />
                </div>
              </div>
            </Aulas>
          );
        })
      : <p>Por favor, faça login</p>}
  </AppContainer>
);
}

export default Admin;
