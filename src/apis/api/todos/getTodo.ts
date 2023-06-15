import { AuthApi } from '../axiosConfig';
import { APIS } from '../constants/APIS';

export type GetTodoRequest = void;
export interface GetTodoResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const getTodo = () => {
  return AuthApi.get(APIS.TODO);
};
