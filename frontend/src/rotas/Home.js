import Pesquisa from "../components/Pesquisa";
import styled from "styled-components";
import { getAulas } from "../servicos/Aulas";
import { useEffect, useState } from "react";
import { Titulo } from "../components/Titulo";
import HeaderAdmin from "../components/HeaderAdmin";

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

function Home() {
  const [aulas, setAulas] = useState([]);
  useEffect(() => {
    fetchAulas();
  }, []);

  async function fetchAulas() {
    const aulasDaAPI = await getAulas();
    setAulas(aulasDaAPI);
  }

  const token = localStorage.getItem('token') || null;

  return (
    <AppContainer>
      <HeaderAdmin />
      <Pesquisa />
      <Titulo>AULAS RECENTES</Titulo>
      {token 
        ? aulas.map((aula) => {
          console.log(aula)
          return (
           <Aulas>
              <div>
                <p>{aula.titulo}</p>
                <p>{aula.disciplina}</p>
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

export default Home;
