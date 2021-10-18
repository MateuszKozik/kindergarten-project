import axios from "axios";
import { hostName } from "./host";

export const getGroups = async () => {
    try{
        const res = await axios.get(`${hostName}/Group`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getGroup = async (groupId) => {
    try{
        const res = await axios.get(`${hostName}/Group/${groupId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getAllActive = async () => {
    try{
        const res = await axios.get(`${hostName}/Group/GetAllActive`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addGroup = async (group) => {
    try{
        const res = await axios.post(`${hostName}/Group/Add`,group);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updateGroup= async (group) => {
    try{
        const res = await axios.post(`${hostName}/Group/Update`,group);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deleteGroup = async (groupId) => {
    try{
        const res = await axios.get(`${hostName}/Group/Delete/${groupId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}