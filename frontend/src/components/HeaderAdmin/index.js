import styled from 'styled-components';
import Logo from '../Logo';
import MenuHeaderAdmin from '../MenuHeaderAdmin'
import { Link } from 'react-router-dom';
import BotaoLogout from '../BotaoSair/BotaoSair';

const HeaderContainer = styled.header`
    background-color: #efe1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function HeaderAdmin() {
    return (
        <HeaderContainer>
            <Link to="/" style={{
                textDecoration: 'none',
                color: 'inherit',
            }}>
            <Logo/>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}> 
                <MenuHeaderAdmin/>
                <BotaoLogout />
            </div>
        </HeaderContainer>
    )
}

export default HeaderAdmin