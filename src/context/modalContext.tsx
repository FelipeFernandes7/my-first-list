import { useState } from "react";
import { getUsers } from "../controller/usersController";
import { createContext } from "react";

type ListModal = {
  list: object;
  setList: object;
};

export const ModalProvider = createContext([]);

export function ModalContext() {
  const [list, setList] = useState<ListModal[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  async function openModal() {
    const listData = await getUsers();
    setList(listData);
    setIsOpen(true);
  }

  return {
    openModal,
    modalIsOpen,
    closeModal,
    list,
  };
}
