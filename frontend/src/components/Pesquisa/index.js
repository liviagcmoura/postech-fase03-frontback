import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAulas } from "../../servicos/Aulas";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, rgb(82, 0, 51) 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 15px 0;
  height: 250px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 35px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [aulasPesquisadas, setAulasPesquisadas] = useState([]);
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    fetchAulas();
  }, []);

  async function fetchAulas() {
    const aulasDaAPI = await getAulas();
    setAulas(aulasDaAPI);
  }

  return (
    <PesquisaContainer>
      <Titulo>Boas-vindas ao blog da Avanço!</Titulo>
      <Subtitulo>Procurando uma aula específica?</Subtitulo>
      <Input
        placeholder="Busque aulas por palavra-chave"
        onChange={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = aulas.filter((aula) =>
            aula.titulo.includes(textoDigitado)
          );
          setAulasPesquisadas(resultadoPesquisa);
        }}
      />
      {aulasPesquisadas.map((aula) => (
        <Resultado>
          <div>
            <p>{aula.titulo}</p>
          </div>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
