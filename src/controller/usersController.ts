
import api from "../Services/api";

export async function getUsers(){
    let data:any[] = [];
    await api.get('/listusers').then(response => data= response.data.data);
    return data;
}

export async function addUsers(){
    let data:any[] = []
    await api.post('/addlist').then(response => data= response.data.data);
    return data;
}
export async function updateUser(){
    let data:any[] = []
    await api.put('/userupdate:id').then(response => data= response.data.data);
    return data;
}