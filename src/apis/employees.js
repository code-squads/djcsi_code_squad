import axios from 'axios';
import { SERVER_URL } from '../constants/config';

export const getRecentVerifications = async (gstin) => {
  if(!gstin)  return [];
  const employees = await axios.get(`${SERVER_URL}/api/recentVerifications?gstin=${gstin}`);
  return employees.data.owner[0].recent_verifications;
}
export const getEmployee = async (aadhar) => {
  if(!aadhar)  return [];
  const response = await axios.get(`${SERVER_URL}/api/employee?aadhar=${aadhar}`);
  return response.data.employee;
}
export const getEmployees = async (gstin) => {
  if(!gstin)  return [];
  const response = await axios.get(`${SERVER_URL}/api/myEmployees?gstin=${gstin}`);
  return response.data.employees;
}
export const getReportedEmployees = async (gstin) => {
  if(!gstin)  return [];
  const response = await axios.get(`${SERVER_URL}/api/reportedEmployees?gstin=${gstin}`);
  return response.data.employees;
}
export const getRecommendedEmployees = async (gstin) => {
  if(!gstin)  return [];
  const response = await axios.get(`${SERVER_URL}/api/recommendedEmployees?gstin=${gstin}`);
  return response.data.employees;
}
export const hireEmployee = async (employer_gstin, employee_id, role) => {
  if(!employee_id || !role || !employer_gstin)  return false;
  const response = await axios.post(`${SERVER_URL}/api/hireEmployee`, { employer_gstin, id: employee_id, role });
  return response.data;
}



export function testImage(imageName){
  return imageName.includes('amitabh') || imageName.includes('amit');
}