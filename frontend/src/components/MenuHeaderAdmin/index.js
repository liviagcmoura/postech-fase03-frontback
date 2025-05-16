import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OpcoesMenu = styled.ul`
    display: flex;
    gap: 5px; 
`

const OpcaoMenu = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: right;
    text-align: right;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['Admin', 'Sair']

function MenuHeader() {
    return (
        <OpcoesMenu>
            { textoOpcoes.map ( (texto) => (
                 <Link to={`/${texto.toLowerCase()}`}><OpcaoMenu><p>{texto}</p></OpcaoMenu></Link>
            ) ) }
        </OpcoesMenu>
    )
}

export default MenuHeader