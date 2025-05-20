import styled from 'styled-components';

const BotaoDeletarContainer = styled.button`
  background-color: #f44336;
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
    background-color: #d32f2f;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DeletarIcone = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
`;

const BotaoDeletar = ({ onClick }) => {
  return (
    <BotaoDeletarContainer onClick={onClick}>
      <DeletarIcone />
      Deletar
    </BotaoDeletarContainer>
  );
};

export default BotaoDeletar;