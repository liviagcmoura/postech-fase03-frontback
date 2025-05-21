const ModalAula = ({ aula, onClose }) => {
  if (!aula) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'rgba(247, 221, 234)',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '600px',
        width: '90%'
      }}>
        <h2>{aula.titulo}</h2>
        <p>Disciplina: {aula.disciplina}</p>
        <p>Professor: {aula.autor.nome}</p>
        <p>Conteúdo: {aula.conteudo || 'Sem descrição'}</p>
        <p>Data de postagem: {aula.data}</p>
        
        <button 
          onClick={onClose}
          style={{
            marginTop: '20px',
            padding: '8px 16px',
            cursor: 'pointer',
            backgroundColor: 'rgba(94, 8, 51)',
            color: 'white'
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalAula;