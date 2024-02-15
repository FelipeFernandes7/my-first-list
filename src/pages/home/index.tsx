import { useEffect, useState } from "react";
import { Card } from "../../components/card";

import { Status } from "../../components/status";
import { addNewUser, getUsers } from "../../controller/api";
import { FaPlus } from "react-icons/fa6";

type UserProps = {
  name: string;
  time: Date;
  status: Status;
};
export function Home() {
  const [user, setUser] = useState<UserProps>({
    name: "",
    time: new Date(),
    status: {
      completed: false,
      processing: false,
      incomplete: false,
    },
  });
  const [data, setData] = useState<UserProps[]>([]);

  const handleGetUsers = async () => {
    const response = await getUsers();
    if (response) {
      setData(response);
    }
  };
  useEffect(() => {
    handleGetUsers();
  }, [user]);

  const handleAddUser = async () => {
    const response = await addNewUser(user);
    return response;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <header className="h-28 bg-black w-full flex justify-center items-center">
        <h1 className="text-3xl text-white font-bold">Listas de usuários</h1>
      </header>
      <h1 className="text-2xl text-white font-bold my-8 text-center px-6 whitespace-pre-wrap">
        Pessoas que usam Serviços do Felipe
      </h1>
      <form className="w-full flex flex-col justify-center items-center px-6 md:max-w-[500px]">
        <div className="w-full flex items-center gap-2 my-4">
          <input
            type="text"
            className="w-full text-white text-sm border-[1px] border-slate-600 bg-neutral-900 rounded-xl p-3 px-2 outline-none"
            placeholder="Digite um empregado"
            value={user.name}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <button
            className="rounded-xl bg-red-700 p-3 active:scale-95 hover:bg-red-800 transition-all duration-300 disabled:opacity-75"
            onClick={handleAddUser}
            disabled={!user.name}
          >
            <FaPlus />
          </button>
        </div>
      </form>
      <div className="w-full flex justify-between items-center px-6 md:max-w-[500px] my-2 text-red-600">
        <span className="text-sm underline">Nomes</span>
        <span className="text-sm underline">Hora(s)</span>
      </div>
      <section className="w-full flex flex-col items-center gap-2 mb-6 px-6 md:max-w-[500px]">
        {data.map((user, key) => (
          <Card key={key} name={user.name} time={new Date()} />
        ))}
      </section>
    </div>
  );
}
