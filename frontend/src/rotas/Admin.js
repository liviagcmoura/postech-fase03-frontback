import styled from "styled-components";
import { getAulas } from "../servicos/Aulas";
import { useEffect, useState } from "react";
import { Titulo } from "../components/Titulo";
import HeaderAdmin from "../components/HeaderAdmin";
import BotaoEditar from "../components/BotaoEditar";
import BotaoDeletar from "../components/BotaoDeletar";
import { Link } from "react-router-dom";
import ModalAula from "../components/AulaModal";

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

function Admin() {
  const [aulas, setAulas] = useState([]);
  useEffect(() => {
    fetchAulas();
  }, []);

  async function fetchAulas() {
    const aulasDaAPI = await getAulas();
    setAulas(aulasDaAPI);
  }

  const handleEdit = (aulaId) => {
    console.log('Editar aula:', aulaId);
    // Adicione lógica de edição aqui 
  };

  const handleDelete = (aulaId) => {
    console.log('Deletar aula:', aulaId);
    // Adicione lógica de exclusão aqui
       if (window.confirm('Tem certeza que deseja excluir esta aula?')) {
      // Lógica para deletar 
    }
  };

  const [selectedAula, setSelectedAula] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = localStorage.getItem('token') || null;

  const handleAulaClick = (aula) => {
    setSelectedAula(aula);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAula(null);
  };

  return (
    <AppContainer>
      <HeaderAdmin />

      <NovaAulaContainer>
        <TituloAdmin>Olá, prof!</TituloAdmin>
        <Link to="/postar">Postar nova aula</Link>
      </NovaAulaContainer>

      <Titulo>TODAS AS AULAS</Titulo>
      {token
        ? aulas.map((aula) => (
            <Aulas 
              key={aula.id}
              onClick={() => handleAulaClick(aula)}
              style={{ cursor: 'pointer' }}
            >
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
          ))
        : <p>Por favor, faça login</p>
      }

      {isModalOpen && (
        <ModalAula 
          aula={selectedAula} 
          onClose={handleCloseModal} 
        />
      )}
    </AppContainer>
  );
}
export default Admin;