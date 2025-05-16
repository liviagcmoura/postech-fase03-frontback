import Pesquisa from "../components/Pesquisa";
import styled from "styled-components";
import { getAulasPrincipais } from "../servicos/Aulas";
import { useEffect, useState } from "react";
import { Titulo } from "../components/Titulo";
import Header from "../components/Header"

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

function HomeAlunos() {
  const [aulas, setAulas] = useState([]);
  useEffect(() => {
    fetchAulas();
  }, []);

  async function fetchAulas() {
    const aulasDaAPI = await getAulasPrincipais();
    setAulas(aulasDaAPI);
  }

  const token = localStorage.getItem('token') || null;

  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <Titulo>AULAS RECENTES</Titulo>
      {token 
        ? aulas.map((aula) => {
          console.log(aula)
          return (
           <Aulas>
              <div>
                <p>{aula.titulo}</p>
                <p>{aula.conteudo}</p>
                <p>{aula.autor.nome}</p>
              </div>
            </Aulas>
          )
        }
      )
        : "Por favor, faça login"}
    </AppContainer>
  );
}

export default HomeAlunos;
