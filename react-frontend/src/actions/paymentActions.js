import axios from "axios";
import { hostName } from "./host";

export const getPayments = async () => {
    try{
        const res = await axios.get(`${hostName}/Payment`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getPayment = async (paymentId) => {
    try{
        const res = await axios.get(`${hostName}/Payment/${paymentId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addPayment= async (payment) => {
    try{
        const res = await axios.post(`${hostName}/Payment/Add`,payment);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updatePayment= async (payment) => {
    try{
        const res = await axios.post(`${hostName}/Payment/Update`,payment);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deletePayment = async (paymentId) => {
    try{
        const res = await axios.get(`${hostName}/Payment/Delete/${paymentId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}