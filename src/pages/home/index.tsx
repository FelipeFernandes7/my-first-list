import { useState } from "react";
import { Card } from "../../components/card";

import { Status } from "../../components/status";
import { addNewUser } from "../../controller/api";

import "./styles.scss";

type UserProps = {
  name: string;
  time: Date;
  status: Status;
};
export function Home() {
  const logo =
    "https://i.pinimg.com/736x/14/e1/85/14e185fe952e67dbdda7af6b10f5bf73.jpg";
  const [user, setUser] = useState<UserProps>({
    name: "",
    time: new Date(),
    status: {
      completed: false,
      processing: false,
      incomplete: false,
    },
  });

  async function addNewUserToList() {
    try {
      await addNewUser({
        name: user.name,
        time: user.time,
        status: user.status,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <header>
        <img src={logo} alt="Felipe" />
      </header>
      <h1>Pessoas que usam Serviços do Felipe</h1>
      <div className="list">
        <input
          className="input"
          type="text"
          placeholder="Digite um empregado"
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <button className="btn" onClick={addNewUserToList}>
          Adicionar
        </button>
        {Object.keys(user).map((key) => (
          <Card key={key} name={user.name} time={user.time} />
        ))}
      </div>
    </div>
  );
}
