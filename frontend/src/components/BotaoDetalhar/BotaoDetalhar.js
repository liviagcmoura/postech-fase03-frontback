import styled from 'styled-components';

const BotaoDetalharContainer = styled.button`
  background-color:rgb(38, 1, 184);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.3s;

  &:hover {
    background-color:rgb(38, 1, 184);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DetalharIcone = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13a1 1 0 0 1-1-1V3.5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
`;

const BotaoDetalhar = ({ onClick }) => {
  return (
    <BotaoDetalharContainer onClick={onClick}>
      <DetalharIcone />
      Detalhes
    </BotaoDetalharContainer>
  );
};

export default BotaoDetalhar;