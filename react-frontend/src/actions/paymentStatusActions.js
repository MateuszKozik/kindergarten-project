import axios from "axios";
import { hostName } from "./host";

export const getPaymentStatuses = async () => {
    try{
        const res = await axios.get(`${hostName}/PaymentStatus`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getPaymentStatus = async (paymentStatusId) => {
    try{
        const res = await axios.get(`${hostName}/PaymentStatus/${paymentStatusId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addPaymentStatus = async (paymentStatus) => {
    try{
        const res = await axios.post(`${hostName}/PaymentStatus/Add`,paymentStatus);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updatePaymentStatus= async (paymentStatus) => {
    try{
        const res = await axios.post(`${hostName}/PaymentStatus/Update`,paymentStatus);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deletePaymentStatus = async (paymentStatusId) => {
    try{
        const res = await axios.get(`${hostName}/PaymentStatus/Delete/${paymentStatusId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}