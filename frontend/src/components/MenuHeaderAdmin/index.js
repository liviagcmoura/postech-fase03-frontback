import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OpcoesMenu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const OpcaoMenu = styled.li`
  font-size: 16px;
  display: flex;
  align-items: right;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
  min-width: 120px;

  a {
    color: purple;
    text-decoration: none;
    width: 100%;
    text-align: center;
  }

`;

const textoOpcoes = ['Admin']

function MenuHeader() {
  return (
    <div>
    <nav>
      <OpcoesMenu>
        {textoOpcoes.map((texto) => (
          <OpcaoMenu key={texto}>
            <Link to={`/${texto.toLowerCase()}`}>{texto}</Link>
          </OpcaoMenu>
        ))}
      </OpcoesMenu>
    </nav>
    </div>
  );
}

export default MenuHeader;
