import styled from "styled-components";
import { getAulas } from "../servicos/Aulas";
import { useEffect, useState } from "react";
import { Titulo } from "../components/Titulo";
import HeaderAdmin from "../components/HeaderAdmin";
import BotaoEditar from "../components/BotaoEditar";
import BotaoDeletar from "../components/BotaoDeletar";
import AulaCreate from "../components/AulaCreate/AulaCreate";
import AulaEdit from "../components/AulaEdit/AulaEdit";
import BotaoDetalhar from "../components/BotaoDetalhar/BotaoDetalhar";
import ModalAula from "../components/AulaModal";
import BotaoCriar from "../components/BotaoCriar/BotaoCriar";
import ModalConfirmacao from "../components/ModalConfirmacao/ModalConfirmacao";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, rgb(82, 0, 51) 35%, #326589 165%);
`;


const Aulas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  p {
    width: 200px;
    color: #ffff;
    font-size: 18px;
    justify-content: center;
  }

  background-color: ${({ index }) =>
  index % 2 === 0 ? 'rgb(102, 1, 64)'  : 'rgb(62, 47, 62) '};
`;



const NovaAulaContainer = styled.section`
  background-image: linear-gradient(90deg, rgb(82, 0, 51) 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 15px 0;
  height: 150px;
  width: 100%;
`;

const TituloAdmin = styled.h2`
  color: #fff;
  font-size: 35px;
  text-align: center;
  width: 100%;
`;

function Admin() {
  const [aulas, setAulas] = useState([]);
  useEffect(() => {
    fetchAulas();
    pegarNomeDoToken();
    pegarRoleDoToken();
    pegarIdDoToken();
}, []);

const pegarNomeDoToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUsuarioNome(payload.name || 'Usuário');
  } catch (err) {
    console.error("Erro ao decodificar token:", err);
    setUsuarioNome('Usuário');
  }
};

const pegarRoleDoToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUsuarioRole(payload.role || 'Usuário');
  } catch (err) {
    console.error("Erro ao decodificar token:", err);
    setUsuarioRole('Usuário');
  }
};

const pegarIdDoToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    localStorage.setItem('id', payload.id);
  } catch (err) {
    console.error("Erro ao decodificar token:", err);
    localStorage.setItem('id',"NotFound");
  }
};

async function fetchAulas() {
    const aulasDaAPI = await getAulas();
    setAulas(aulasDaAPI);
}

const handleCreate = () => {
  setIsCreating(true);
};

const handleEdit = (aulaId) => {
  const aulaSelecionada = aulas.find(a => a._id === aulaId || a.id === aulaId);
  if (aulaSelecionada) {
    setAulaParaEditar(aulaSelecionada);
    setIsEditing(true);
  }
    // Adicione lógica de edição aqui 
};

const handleDelete = (aulaId) => {
  const aulaSelecionada = aulas.find(a => a._id === aulaId || a.id === aulaId);
  setAulaParaDeletar(aulaSelecionada);
  setShowConfirmModal(true);  
};

const [usuarioNome, setUsuarioNome] = useState('');
const [usuarioRole, setUsuarioRole] = useState('');
const [selectedAula, setSelectedAula] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const token = localStorage.getItem('token') || null;
const [isCreating, setIsCreating] = useState(false);
const [isEditing, setIsEditing] = useState(false);
const [aulaParaEditar, setAulaParaEditar] = useState(null);
const [aulaParaDeletar, setAulaParaDeletar] = useState(null);
const [showConfirmModal, setShowConfirmModal] = useState(false);

const handleAulaClick = (aula) => {
    setSelectedAula(aula);
    setIsModalOpen(true);
};

const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAula(null);
};

const confirmarExclusao = async () => {
  if (!aulaParaDeletar) return;

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Sessão expirada.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3030/aulas/${aulaParaDeletar._id || aulaParaDeletar.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      alert("Aula removida com sucesso!");
      fetchAulas();
    } else {
      const msg = await response.text();
      alert(`Erro ao remover aula: ${response.status} - ${msg}`);
    }
  } catch (error) {
    console.error("Erro ao excluir aula:", error);
    alert("Erro na requisição: " + error.message);
  } finally {
    setShowConfirmModal(false);
    setAulaParaDeletar(null);
  }
};


return (
  <AppContainer>
    <HeaderAdmin />
      <NovaAulaContainer>
        <TituloAdmin>Olá,{usuarioRole}  {usuarioNome}</TituloAdmin>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <BotaoCriar onClick={handleCreate}></BotaoCriar>
          </div>
      </NovaAulaContainer>
      <Titulo>TODAS AS AULAS</Titulo>
      {token
        ? Array.isArray(aulas) && aulas.length > 0
          ? aulas.map((aula, index) => (
              <Aulas key={aula._id || aula.id} index={index}>
              <div>
               <div>
                  <span> <label style={{color:'white'}}>Título:     </label> <p style={{color : 'white'}}>{aula.titulo}</p></span>
                  <span> <label style={{color:'white'}}>Disciplina: </label> <p style={{color : 'white'}}>{aula.disciplina}</p></span>
                  <span> <label style={{color:'white'}}>Autor:      </label> <p style={{color : 'white'}}>{aula.autor.nome}</p></span>
                </div>
                              
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <BotaoDetalhar onClick={() => handleAulaClick(aula)} style={{ cursor: 'pointer' }}>
                      Acessar Detalhes
                  </BotaoDetalhar>
                  <BotaoEditar onClick={() => handleEdit(aula.id)} />
                  <BotaoDeletar onClick={() => handleDelete(aula.id)} />
                </div>
              </div>
            </Aulas>
          ))
          : <p style = {{ color: 'white' }}>Não há aulas disponíveis</p>
          : <p style = {{ color: 'white' }}>Por favor, faça login</p>
      }
      {isModalOpen && (
        <ModalAula 
          aula={selectedAula} 
          onClose={handleCloseModal} 
        />
      )}

      {isCreating && (
        <AulaCreate
          onClose={() => setIsCreating(false)}
          onSubmit={fetchAulas} 
        />    
      )}
      
      {isEditing && (
        <AulaEdit
          aula={aulaParaEditar}
          onClose={() => {
            setIsEditing(false);
            setAulaParaEditar(null);
          }}
          onSubmit={fetchAulas}
        />
      )}

      {showConfirmModal && (
        <ModalConfirmacao
          mensagem={`Deseja realmente excluir a aula "${aulaParaDeletar?.titulo}"?`}
          onConfirmar={confirmarExclusao}
          onCancelar={() => {
          setShowConfirmModal(false);
          setAulaParaDeletar(null);
          }}
        />
    )}

    </AppContainer>
  );
}
export default Admin;