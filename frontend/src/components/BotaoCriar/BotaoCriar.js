import styled from 'styled-components';

const BotaoCriarContainer = styled.button`
  background-color:rgb(76, 112, 175);
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
    background-color:rgb(76, 112, 175); 
  }

  &:active {
    transform: scale(0.98);
  }
`;

const CriarIcone = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
`;

const BotaoCriar = ({ onClick }) => {
  return (
    <BotaoCriarContainer onClick={onClick}>
      <CriarIcone />
        Adicionar Aula
    </BotaoCriarContainer>
  );
};

export default BotaoCriar;