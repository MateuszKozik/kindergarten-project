import axios from "axios";
import { hostName } from "./host";

export const getParents = async () => {
    try{
        const res = await axios.get(`${hostName}/Parent`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getParent = async (parentId) => {
    try{
        const res = await axios.get(`${hostName}/Parent/${parentId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getByUser = async (userId) => {
    try{
        const res = await axios.get(`${hostName}/Parent/GetByUser/${userId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addParent = async (parent) => {
    try{
        const res = await axios.post(`${hostName}/Parent/Add`,parent);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updateParent= async (parent) => {
    try{
        const res = await axios.post(`${hostName}/Parent/Update`,parent);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deleteParent = async (parentId) => {
    try{
        const res = await axios.get(`${hostName}/Parent/Delete/${parentId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}