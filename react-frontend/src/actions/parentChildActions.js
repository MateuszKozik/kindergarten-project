import axios from "axios";
import { hostName } from "./host";

export const getParentChilds = async () => {
    try{
        const res = await axios.get(`${hostName}/ParentChild`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getParentChild = async (parentChildId) => {
    try{
        const res = await axios.get(`${hostName}/ParentChild/${parentChildId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addParentChild = async (parentChild) => {
    try{
        const res = await axios.post(`${hostName}/ParentChild/Add`,parentChild);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updateParentChild= async (parentChild) => {
    try{
        const res = await axios.post(`${hostName}/ParentChild/Update`,parentChild);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deleteParentChild = async (parentChildId) => {
    try{
        const res = await axios.get(`${hostName}/ParentChild/Delete/${parentChildId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}