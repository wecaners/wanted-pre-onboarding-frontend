import { basicApi } from '../axiosConfig';
import { APIS } from '../constants/APIS';

export interface SigninParams {
  email: string;
  password: string;
}

export interface SigninResponse {
  access_token: string;
}

export function signin(data: SigninParams) {
  return basicApi.post<void>(APIS.SIGNIN, data);
}
