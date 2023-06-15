import axios from 'axios';

export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const basicApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});
