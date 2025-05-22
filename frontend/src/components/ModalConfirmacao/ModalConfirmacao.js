import React from "react";

const ModalConfirmacao = ({ mensagem, onConfirmar, onCancelar }) => {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "8px",
        maxWidth: "400px",
        width: "90%",
        textAlign: "center"
      }}>
        <p>{mensagem}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
          <button
            onClick={onCancelar}
            style={{ padding: "8px 16px", backgroundColor: "#888", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Cancelar
          </button>
          <button
            onClick={onConfirmar}
            style={{ padding: "8px 16px", backgroundColor: "#c0392b", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacao;
