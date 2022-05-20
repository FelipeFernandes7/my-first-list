import { response } from "express";
import api from "../Services/api";
export async function getUsers(){
    let data:any[] = [];
    await api.get('/listusers').then(response => data= response.data.data);
    return data;
}

export async function addUsers(){
    let data:any[] = []
    await api.put('/addlist').then(response => data= response.data.data);
    return data;
}