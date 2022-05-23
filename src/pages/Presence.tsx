import { Card } from "../components/Card";
import { Screen } from "../components/Screen";
import { AnyContext } from "../context/addUserContext";

import Logo from "../assets/logo.png";
import "../scss/presence.scss";

export function Presence() {
  const { user, handleAddUser, nameUser, setNameUser } = AnyContext();
  return (
    <div className="container">
      <header>
        <img src={Logo} alt="Mazza" />
      </header>
      <h1>Pessoas que usam Serviços da Mazza</h1>
      <div className="list">
        <input
          id="inpt"
          className="input"
          type="text"
          placeholder="Digite um empregado"
          onChange={(event) => setNameUser(event.target.value)}
          value={nameUser}
        />
        <button className="btn" onClick={handleAddUser}>
          Adicionar
        </button>
        {<Screen />}
        {user.map((user, index) => (
          <Card key={index} name={user.name} time={user.time} />
        ))}
      </div>
    </div>
  );
}
export default Presence;
