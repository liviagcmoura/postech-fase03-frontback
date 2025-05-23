import logo from '../../images/logo-avanco.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 25px;
    align-items: center;  
    justify-content: flex-start; 
    width: 100%;  
`

const LogoImagem = styled.img`
    margin-right: 10px;
    width: 90px;
    height: auto; 
`

const LogoTexto = styled.p`
    text-decoration: none;
    border-bottom: none;
    color:rgb(94, 8, 51);
`

function Logo() {
    return(
    <LogoContainer>
        <LogoImagem 
            src={logo} 
            alt='logo' 
            className='logo-img'
        ></LogoImagem>
        <LogoTexto>Escola <strong>Avanço</strong></LogoTexto>
    </LogoContainer>
    )
}

export default Logo