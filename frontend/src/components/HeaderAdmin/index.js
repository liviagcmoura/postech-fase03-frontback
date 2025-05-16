import styled from 'styled-components';
import Logo from '../Logo';
import MenuHeaderAdmin from '../MenuHeaderAdmin'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #efe1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function HeaderAdmin() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <MenuHeaderAdmin/>
        </HeaderContainer>
    )
}

export default HeaderAdmin