import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const BotaoLogout = () => {
  const navigate = useNavigate();

const Botao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  color: white;
  font-color: #fff;
`;

const LinkButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    color: white  ;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
    font-family: inherit;
`;

  const sair = () => {
    navigate('/sair'); 
  };

  return    (   
            <Botao>
                <LinkButton onClick={sair}>Sair</LinkButton>
            </Botao>
            );
};

export default BotaoLogout;
