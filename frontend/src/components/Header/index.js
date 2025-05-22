import styled from 'styled-components';
import Logo from '../Logo';
import MenuHeader from '../MenuHeader'
import { Link } from 'react-router-dom';
import BotaoLogout from '../BotaoSair/BotaoSair';

const HeaderContainer = styled.header`
    background-color:rgb(25, 20, 23);
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header() {
    
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <MenuHeader/>
            <BotaoLogout />
        </HeaderContainer>


    )
}

export default Header