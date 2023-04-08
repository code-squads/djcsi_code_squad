import axios from 'axios';
import { SERVER_URL } from '../constants/config';

export const getEmployees = async (gstin) => {
  if(!gstin)  return [];
  const employees = await axios.get(`${SERVER_URL}/api/myEmployees?gstin=${gstin}`);
  return employees.data.employees;
}
export const getPastEmployees = async (gstin) => {
  if(!gstin)  return [];
  const employees = await axios.get(`${SERVER_URL}/api/pastEmployees?gstin=${gstin}`);
  return employees.data.employees;
}