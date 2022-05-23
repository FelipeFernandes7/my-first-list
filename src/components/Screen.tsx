import Modal from "react-modal";
import { ModalContext } from "../context/modalContext";

import On from "../assets/online.png";
import Off from "../assets/off.png";
import "../scss/screen.scss";

export function Screen() {
  Modal.setAppElement("#root");
  const { openModal, modalIsOpen, closeModal, list } = ModalContext();

  return (
    <div className="screen">
      {!modalIsOpen && (
        <button className="btnOpen" onClick={openModal}>
          Mostrar Lista
        </button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="list">
          {list.map((user: any) => (
            <div key={user.id} className="listUsers">
              <strong>{user.nome}</strong>
              <small>
                {user.status === 1 ? (
                  <img
                    className="on"
                    src={On}
                    height={12}
                    width={12}
                    alt="Ativo"
                  />
                ) : (
                  <img
                    className="off"
                    src={Off}
                    height={12}
                    width={12}
                    alt="Inativo"
                  />
                )}
              </small>
            </div>
          ))}
        </div>
        <div className="button">
          {modalIsOpen && (
            <button className="btnClose" onClick={closeModal}>
              Fechar Lista
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
}
