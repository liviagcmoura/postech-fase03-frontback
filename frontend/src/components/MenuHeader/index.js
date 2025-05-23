import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OpcoesMenu = styled.ul`
display: flex;
justify-content: right;
gap: 5px;
list-style: none;
padding: 0;
margin: 0;
`;

const OpcaoMenu = styled.li`
font-size: 16px;
justify-content: right;
display: flex;
align-items: center;
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
`

const textoOpcoes = ['Login']

function MenuHeader() {
  return (
      <OpcoesMenu>
        {textoOpcoes.map((texto) => (
          <OpcaoMenu key={texto}>
            <Link to={`/${texto.toLowerCase()}`}>{texto}</Link>
          </OpcaoMenu>
        ))}
      </OpcoesMenu>
  )
}

export default MenuHeader
