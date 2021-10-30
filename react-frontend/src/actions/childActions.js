import axios from "axios";
import { hostName } from "./host";

export const getChildes = async () => {
	try {
		const res = await axios.get(`${hostName}/Child`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getChild = async (childId) => {
	try {
		const res = await axios.get(`${hostName}/Child/${childId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getByParent = async (parentId) => {
	try {
		const res = await axios.get(`${hostName}/Child/GetByParent/${parentId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const addChild = async (child) => {
	try {
		const res = await axios.post(`${hostName}/Child/Add`, child);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const updateChild = async (child) => {
	try {
		const res = await axios.post(`${hostName}/Child/Update`, child);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const deleteChild = async (childId) => {
	try {
		const res = await axios.get(`${hostName}/Child/Delete/${childId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const addByParent = async (id, child) => {
	try {
		const res = await axios.post(`${hostName}/Child/AddByParent/${id}`, child);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getIsSaved = async (childId) => {
	try {
		const res = await axios.get(`${hostName}/Child/IsSaved/${childId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getByGroup = async (groupId) => {
	try {
		const res = await axios.get(`${hostName}/child/GetByGroup/${groupId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};
