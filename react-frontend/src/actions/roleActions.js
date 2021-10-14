import axios from "axios";
import { hostName } from "./host";

export const getRoles = async () => {
    try{
        const res = await axios.get(`${hostName}/Role`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getRole = async (roleId) => {
    try{
        const res = await axios.get(`${hostName}/Role/${roleId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addRole = async (role) => {
    try{
        const res = await axios.post(`${hostName}/Role/Add`,role);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updateRole = async (role) => {
    try{
        const res = await axios.post(`${hostName}/Role/Update`,role);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deleteRole = async (roleId) => {
    try{
        const res = await axios.get(`${hostName}/Role/Delete/${roleId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}