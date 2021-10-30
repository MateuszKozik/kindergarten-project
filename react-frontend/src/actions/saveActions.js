import axios from "axios";
import { hostName } from "./host";

export const getSaves = async () => {
	try {
		const res = await axios.get(`${hostName}/Save`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getSave = async (saveId) => {
	try {
		const res = await axios.get(`${hostName}/Save/${saveId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const addSave = async (save) => {
	try {
		const res = await axios.post(`${hostName}/Save/Add`, save);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const updateSave = async (save) => {
	try {
		const res = await axios.post(`${hostName}/Save/Update`, save);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const deleteSave = async (saveId) => {
	try {
		const res = await axios.get(`${hostName}/Save/Delete/${saveId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const unsubscribe = async (saveId) => {
	try {
		const res = await axios.get(`${hostName}/Save/Unsubscribe/${saveId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getByParent = async (parentId) => {
	try {
		const res = await axios.get(`${hostName}/Save/GetByParent/${parentId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};
