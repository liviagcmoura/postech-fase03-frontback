import { aulas } from './dadosAulasPrincipal'
import { Titulo } from '../Titulo'
import styled from 'styled-components'

const AulasPrincipalContainer = styled.section`
    background-color: linear-gradient(90deg,rgb(172, 96, 143) 35%,rgb(230, 208, 219) 165%)
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovasAulasContainer = styled.div`
    margin-top: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`

const AulaContainer = styled.p`
    cursor: pointer;
    color:rgb(247, 221, 234);
    &:hover {
        border: 1px solid white;
    }
`

function AulasPrincipal() {
    return (
        <AulasPrincipalContainer>
            <Titulo>AULAS RECENTES</Titulo>
            <NovasAulasContainer>
                {aulas.map( aula => (
                        <AulaContainer>{aula.titulo}</AulaContainer>
                ))}
            </NovasAulasContainer>
        </AulasPrincipalContainer>
    )
}

export default AulasPrincipal