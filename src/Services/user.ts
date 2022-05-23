import api from "./api";

export async function getUser(id:number): Promise<object> {
  return await api.get('/listusers');
}

export async function saveUser(nome:string, status:STATUS): Promise<object> {
  return await api.post('/addlist', {nome,status});
}
enum STATUS {
  CONCLUIDO = 1,
  PROCESSANDO = 2,
  INCOMPLETO = 3
}