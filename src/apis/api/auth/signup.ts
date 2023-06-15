import { basicApi } from '../axiosConfig';
import { APIS } from '../constants/APIS';

export interface SignupParams {
  email: string;
  password: string;
}

export function signup(data: SignupParams) {
  return basicApi.post<void>(APIS.SIGNUP, data);
}
