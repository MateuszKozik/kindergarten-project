import axios from "axios";
import { hostName } from "./host";

export const getChildes = async () => {
    try{
        const res = await axios.get(`${hostName}/Child`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getChild = async (childId) => {
    try{
        const res = await axios.get(`${hostName}/Child/${childId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addChild = async (child) => {
    try{
        const res = await axios.post(`${hostName}/Child/Add`,child);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updateChild= async (child) => {
    try{
        const res = await axios.post(`${hostName}/Child/Update`,child);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deleteChild = async (childId) => {
    try{
        const res = await axios.get(`${hostName}/Child/Delete/${childId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}