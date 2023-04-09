import axios from 'axios';
import { SERVER_URL } from '../constants/config';

export const getRecentVerifications = async (gstin) => {
  if(!gstin)  return [];
  const employees = await axios.get(`${SERVER_URL}/api/recentVerifications?gstin=${gstin}`);
  return employees.data.owner[0].recent_verifications;
}
export const getEmployees = async (gstin) => {
  if(!gstin)  return [];
  const response = await axios.get(`${SERVER_URL}/api/myEmployees?gstin=${gstin}`);
  return response.data.employees;
}
export const getPastEmployees = async (gstin) => {
  if(!gstin)  return [];
  const response = await axios.get(`${SERVER_URL}/api/pastEmployees?gstin=${gstin}`);
  return response.data.employees;
}
export const hireEmployee = async (employee_id, role) => {
  if(!employee_id || !role)  return false;
  const response = await axios.post(`${SERVER_URL}/api/hireEmployee`, { id: employee_id, role });
  return response.data;
}