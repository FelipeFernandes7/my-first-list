import Modal from "react-modal";
import { useState } from "react";

import "../scss/screen.scss";

export function Screen() {
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="screen">
      
      {!modalIsOpen && <button className="btnOpen" onClick={openModal}>Mostrar Lista</button>}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content">

        <div className="list">
          <div className="listUsers">
            <strong>Luiz Felipe</strong>
            <small>16:51:00</small>
          </div>
          <div className="listUsers">
            <strong>Rodrigo Silva</strong>
            <small>14:30:00</small>
          </div>
          <div className="listUsers">
            <strong>Juliana Silvestre</strong>
            <small>17:51:00</small>
          </div>
          <div className="listUsers">
            <strong>Ronaldo Santos</strong>
            <small>18:01:00</small>
          </div>
          <div className="listUsers">
            <strong>Paula Fernanda</strong>
            <small>12:45:00</small>
          </div>
          <div className="listUsers">
            <strong>Angélica Zambrowski</strong>
            <small>11:40:00</small>
          </div>
          <div className="listUsers">
            <strong>Pedro Neves</strong>
            <small>22:05:40</small>
          </div>

        </div>
        <div className="button">
        {modalIsOpen && <button className="btnClose" onClick={closeModal}>Fechar Lista</button> }
        </div>
      </Modal>
    </div>
  );
}
export default Screen;
