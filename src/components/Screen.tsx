import Modal from "react-modal";
import { ModalContext } from "../context/modalContext";
import  {Status} from "./Status";

import "../scss/screen.scss";


export function Screen() {

  Modal.setAppElement("#root");
  const { openModal, modalIsOpen, closeModal, list, alt, setAlt } = ModalContext();
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
          {list.map((user:any) => (
            <div key={user.id} className="listUsers">
              <strong>{user.nome}</strong>
              <small><Status status={user.status}/></small>
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
