import logo from '../../images/logo-avanco.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 25px;
`

const LogoImagem = styled.img`
    margin-right: 10px;
    width: 90px;
    height: auto; 
`

function Logo() {
    return(
    <LogoContainer>
        <LogoImagem 
            src={logo} 
            alt='logo' 
            className='logo-img'
        ></LogoImagem>
        <p>Escola <strong>Avanço</strong></p>
    </LogoContainer>
    )
}

export default Logo