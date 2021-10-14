import axios from "axios";
import { hostName } from "./host";

export const getPayouts = async () => {
    try{
        const res = await axios.get(`${hostName}/Payout`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getPayout = async (payoutId) => {
    try{
        const res = await axios.get(`${hostName}/Payout/${payoutId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addPayout = async (payout) => {
    try{
        const res = await axios.post(`${hostName}/Payout/Add`,payout);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updatePayout= async (payout) => {
    try{
        const res = await axios.post(`${hostName}/Payout/Update`,payout);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deletePayout = async (payoutId) => {
    try{
        const res = await axios.get(`${hostName}/Payout/Delete/${payoutId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}