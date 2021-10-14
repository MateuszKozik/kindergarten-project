import axios from "axios";
import { hostName } from "./host";

export const getEmployees = async () => {
    try{
        const res = await axios.get(`${hostName}/Employee`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const getEmployee = async (employeeId) => {
    try{
        const res = await axios.get(`${hostName}/Employee/${employeeId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const addEmployee = async (employee) => {
    try{
        const res = await axios.post(`${hostName}/Employee/Add`,employee);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const updateEmployee = async (employee) => {
    try{
        const res = await axios.post(`${hostName}/Employee/Update`,employee);
        return res;
        }catch(error){
            console.log(error);
        }
}

export const deleteEmployee = async (employeeId) => {
    try{
        const res = await axios.get(`${hostName}/Employee/Delete/${employeeId}`);
        return res;
        }catch(error){
            console.log(error);
        }
}