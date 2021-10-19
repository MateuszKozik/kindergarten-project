import axios from "axios";
import { hostName } from "./host";

export const sendPush = async (push) => {
    try{
        const res = await axios.post(`${hostName}/WebPush/SendPush`,push);
        return res;
        }catch(error){
            console.log(error);
        }
}