import styled from 'styled-components';
import Logo from '../Logo';
import MenuHeaderAdmin from '../MenuHeaderAdmin'
import { Link } from 'react-router-dom';
import BotaoLogout from '../BotaoSair/BotaoSair';

const HeaderContainer = styled.header`
    background-color:rgb(25, 20, 23);
    display: flex;
    justify-content: center;
    align-items: center;
`

function HeaderAdmin() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <MenuHeaderAdmin/>
            <BotaoLogout />
        </HeaderContainer>
    )
}

export default HeaderAdmin