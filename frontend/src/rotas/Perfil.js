import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,rgb(82, 0, 51) 35%, #326589 165%);
`

function Perfil() {
  return (
    <AppContainer>
      <h1>Esse é o meu perfil!</h1>
    </AppContainer>
  );
}

export default Perfil;
