import { createContext, useState } from "react";

import Swal from "sweetalert2";
import { saveUser } from "../Services/user";
type UserType = {
  name: string;
  time: string;
};

export const AddProvider = createContext([]);
export function AnyContext() {
  const [nameUser, setNameUser] = useState("");
  const [user, setUser] = useState<UserType[]>([]);

  async function handleAddUser() {
    if (nameUser) {
      const newUser = {
        status: 1,
        name: nameUser,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
     await saveUser(newUser.name, newUser.status);
      setUser((state) => [...state, newUser]);
    } else {
      Swal.fire({
        background: "#131313",
        color: "#fff",
        titleText: "Você não preencheu a lista",
        confirmButtonColor: "#dc143c ",
      });
    }
  }

  return {
    user,
    handleAddUser,
    nameUser,
    setNameUser,
  };
}
