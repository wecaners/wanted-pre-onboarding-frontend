import axios from 'axios';
import { getAccessToken } from '../../utils/localStorage';
const token = getAccessToken();

export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const basicApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

export const AuthApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
