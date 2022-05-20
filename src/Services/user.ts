import api from "./api";

export async function getUser(id:number): Promise<object> {
  return await api.get('/listusers');
}
