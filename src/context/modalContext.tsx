import { useState, useEffect } from "react";
import { getUsers } from "../controller/usersController";
import { updateAllUser, updateUser } from "../Services/user";
import { createContext } from "react";
import { STATUS } from "../Services/user";

type ListModal = {
  user: object;
  setList: object;
};

export const ModalProvider = createContext([]);

export function ModalContext() {
  const [list, setList] = useState<ListModal[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  function closeModal() {
    setIsOpen(false);
    setIsChanged(false);
  }

  async function openModal() {
    const listData = await getUsers();
    setList(listData);
    setIsOpen(true);
    setIsChanged(true);
  }

  useEffect(() => {
    console.log("entrou");
    if (isChanged) {
      setTimeout(async () => {
        await updateAllUser(STATUS.INCOMPLETO);
        const updateStatus = list.map((user: any) => {
           user.status = STATUS.INCOMPLETO;
          return user
        });
        setList(updateStatus);
      }, 5000);
    }
    else{
       updateAllUser(STATUS.CONCLUIDO);
    }
  }, [isChanged]);

  return {
    openModal,
    modalIsOpen,
    closeModal,
    list,
    alt: isChanged,
    setAlt: setIsChanged,
  };
}
