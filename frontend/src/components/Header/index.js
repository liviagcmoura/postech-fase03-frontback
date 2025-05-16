import styled from 'styled-components';
import Logo from '../Logo';
import MenuHeader from '../MenuHeader'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #efe1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <MenuHeader/>
        </HeaderContainer>
    )
}

export default Header