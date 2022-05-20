import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Screen } from "../components/Screen";

import Logo from "../assets/logo.png";
import "../scss/presence.scss";
import Swal from "sweetalert2";
import { addUsers } from "../controller/usersController";
import api from "../Services/api";


type UserType = {
  name: string;
  time: string;
};
export function Presence() {
  const [nameUser, setNameuser] = useState("");
  const [submit, setSubmit] = useState()
  const [user, setUser] = useState<UserType[]>([]);

  async function handleAddUser() {
    if (nameUser) {
      const newUser = {
        status:1,
        name: nameUser,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
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

  return (
    <div className="container">
      <header>
        <img src={Logo} alt="Mazza" />
      </header>

      <h1>Pessoas que usam Serviços da Mazza</h1>

      <div className="list">
        <input
          className="input"
          type="text"
          placeholder="Digite um empregado"
          onChange={(event) => setNameuser(event.target.value)}
          value={nameUser}
        />
        <button className="btn" onClick={handleAddUser}>
          Adicionar
        </button>
        {
          <Screen />
        }
        {user.map((user) => (
          <Card name={user.name} time={user.time} />
        ))}
      </div>
    </div>
  );
}
export default Presence;
