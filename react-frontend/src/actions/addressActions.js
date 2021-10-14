import axios from "axios";
import { hostName } from "./host";

export const getAddresses = async () => {
    try{
        const res = await axios.get(`${hostName}/Address`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getAddress = async (addressId) => {
    try{
        const res = await axios.get(`${hostName}/Address/${addressId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addAddress = async (address) => {
    try{
        const res = await axios.post(`${hostName}/Address/Add`,address);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updateAddress = async (address) => {
    try{
        const res = await axios.post(`${hostName}/Address/Update`,address);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deleteAddress = async (addressId) => {
    try{
        const res = await axios.get(`${hostName}/Address/Delete/${addressId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}