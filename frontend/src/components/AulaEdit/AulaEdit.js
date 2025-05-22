import { useState, useEffect } from "react";

const AulaEdit = ({ aula, onClose, onSubmit }) => {
  const [titulo, setTitulo] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [conteudo, setConteudo] = useState("");

  useEffect(() => {
    if (aula) {
      setTitulo(aula.titulo || "");
      setDisciplina(aula.disciplina || "");
      setConteudo(aula.conteudo || "");
    }
  }, [aula]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token || !aula || !aula._id) {
      alert("Sessão inválida ou aula não encontrada.");
      return;
    }

    const aulaAtualizada = {
      titulo,
      disciplina,
      conteudo,
    };

    try {
      const response = await fetch(`http://localhost:3030/aulas/${aula._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(aulaAtualizada),
      });

      if (response.ok) {
        alert("Aula atualizada com sucesso!");
        onSubmit && onSubmit(); // Atualiza lista
        onClose();
      } else {
        const errorText = await response.text();
        alert(`Erro ao atualizar aula: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error("Erro ao atualizar aula:", error);
      alert("Erro na requisição: " + error.message);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
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
        <h2>Editar Aula</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Título:</label><br />
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <label>Disciplina:</label><br />
            <input
              type="text"
              value={disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <label>Conteúdo:</label><br />
            <textarea
              rows={10}
              cols={50}
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '8px 16px',
                backgroundColor: '#888',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>

            <button
              type="submit"
              style={{
                padding: '8px 16px',
                backgroundColor: '#5e0833',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AulaEdit;
