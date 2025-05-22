import Input from "../Input";
import styled from "styled-components";
import { useMemo } from "react";
import debounce from "lodash/debounce";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, rgb(82, 0, 51) 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 15px 0;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 35px;
  text-align: center;
`;

const Subtitulo = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
`;

function Pesquisa({ onBuscar }) {
  const debouncedBuscar = useMemo(() => debounce(onBuscar, 500), [onBuscar]);

  const handleChange = (e) => {
    const termo = e.target.value;
    debouncedBuscar(termo);
  };

  return (
    <PesquisaContainer>
      <Titulo>Boas-vindas ao blog da Avanço!</Titulo>
      <Subtitulo>Procurando uma aula específica?</Subtitulo>
      <Input
        placeholder="Busque aulas por palavra-chave"
        onChange={handleChange}
      />
    </PesquisaContainer>
  );
}

export default Pesquisa;
