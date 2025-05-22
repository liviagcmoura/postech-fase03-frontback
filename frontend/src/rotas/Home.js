import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAulas } from "../servicos/Aulas";
import Pesquisa from "../components/Pesquisa";
import { Titulo } from "../components/Titulo";
import HeaderAdmin from "../components/HeaderAdmin";
import BotaoDetalhar from "../components/BotaoDetalhar/BotaoDetalhar";
import ModalAula from "../components/AulaModal";

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, rgb(82, 0, 51) 35%, #326589 165%);
`;

const Aulas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;  
  background-color: ${({ index }) =>
  index % 2 === 0 ? 'rgb(102, 1, 64)'  : 'rgb(62, 47, 62) '};

  p {
    width: 200px;
    color: #fff;
    font-size: 18px;
    justify-content: center;
  }

  &:hover {
    border: 1px solid white;
  }
`;

function Home() {
  const [aulas, setAulas] = useState([]);
  const [aulasFiltradas, setAulasFiltradas] = useState([]);
  const [selectedAula, setSelectedAula] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = localStorage.getItem('token') || null;

  useEffect(() => {
    fetchAulas();
  }, []);

  async function fetchAulas() {
    const todas = await getAulas();
    setAulas(todas);
    setAulasFiltradas([]); // limpa busca
  }

  const buscarPorTermo = async (termo) => {
  if (!termo) {
    setAulasFiltradas([]);
    return;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Sessão expirada. Faça login novamente.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3030/aulas/busca?termo=${encodeURIComponent(termo)}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const msg = await response.text();
      throw new Error(`${response.status} - ${msg}`);
    }

    const resultado = await response.json();
    setAulasFiltradas(resultado);
  } catch (err) {
    console.error("Erro na busca:", err);
    setAulasFiltradas([]);
    alert("Erro na busca: " + err.message);
  }
};

  const handleAulaClick = (aula) => {
    setSelectedAula(aula);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAula(null);
  };

  const listaParaExibir = aulasFiltradas.length > 0 ? aulasFiltradas : aulas;

  console.log("Lista de aulas:", aulasFiltradas);

  return (
    <AppContainer>
      <HeaderAdmin />
      <Pesquisa onBuscar={buscarPorTermo} />
      <Titulo>AULAS RECENTES</Titulo>
      {token
        ? listaParaExibir.length > 0
          ? listaParaExibir.map((aula, index) => (
              <Aulas key={aula._id || aula.id} index={index}>
                <div>
                  <p style={{ color: "white" }}>Título: {aula.titulo}</p>
                  <p style={{ color: "white" }}>Disciplina: {aula.disciplina}</p>
                  <p style={{ color: "white" }}>Autor: {aula.autor.nome}</p>
                  <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                    <BotaoDetalhar onClick={() => handleAulaClick(aula)} />
                  </div>
                </div>
              </Aulas>
            ))
          : <p style={{ color: 'white' }}>Não há aulas disponíveis</p>
        : <p style={{ color: 'white' }}>Por favor, faça login</p>
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

export default Home;
