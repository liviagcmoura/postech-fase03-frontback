import styled from 'styled-components';
import Logo from '../Logo';
import MenuHeader from '../MenuHeader'
import { Link } from 'react-router-dom';
import BotaoLogout from '../BotaoSair/BotaoSair';

const HeaderContainer = styled.header`
    background-color:#efe1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

function Header() {
    
    return (
        <HeaderContainer>
            <Link to="/alunos" style={{
                textDecoration: 'none',
                color: 'inherit',
            }}>
                <Logo/>
            </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}> 
            <MenuHeader/>
            <BotaoLogout />
        </div>
        </HeaderContainer>


    )
}

export default Header