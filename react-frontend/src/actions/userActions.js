import axios from "axios";
import { hostName } from "./host";

export const getUsers = async () => {
	try {
		const token = localStorage.getItem("token");
		const res = await axios.get(`${hostName}/User`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getUser = async (userId) => {
	try {
		const res = await axios.get(`${hostName}/User/${userId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const addUser = async (user) => {
	try {
		const res = await axios.post(`${hostName}/User/Add`, user);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const updateUser = async (user) => {
	try {
		const res = await axios.post(`${hostName}/User/Update`, user);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (userId) => {
	try {
		const res = await axios.get(`${hostName}/User/Delete/${userId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const login = async (user) => {
	try {
		const res = await axios.post(`${hostName}/User/Login`, user);
		const token = res.data;

		localStorage.setItem("token", token);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const registerUser = async (user) => {
	try {
		const res = await axios.post(`${hostName}/User/RegisterUser`, user);
		return res;
	} catch (error) {
		console.log(error);
	}
};
