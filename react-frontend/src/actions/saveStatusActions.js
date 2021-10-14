import axios from "axios";
import { hostName } from "./host";

export const getSaveStatuses = async () => {
    try{
        const res = await axios.get(`${hostName}/SaveStatus`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getSaveStatus = async (saveStatusId) => {
    try{
        const res = await axios.get(`${hostName}/SaveStatus/${saveStatusId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addSaveStatus = async (saveStatus) => {
    try{
        const res = await axios.post(`${hostName}/SaveStatus/Add`,saveStatus);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updateSaveStatus= async (saveStatus) => {
    try{
        const res = await axios.post(`${hostName}/SaveStatus/Update`,saveStatus);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deleteSaveStatus = async (saveStatusId) => {
    try{
        const res = await axios.get(`${hostName}/SaveStatus/Delete/${saveStatusId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}