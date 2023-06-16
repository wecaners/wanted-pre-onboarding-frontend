import { AuthApi } from '../axiosConfig';
import { APIS } from '../constants/APIS';

export interface CreateTodoRequest {
  todo: string;
}

export interface CreateTodoResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export function createTodo(data: CreateTodoRequest) {
  return AuthApi.post<CreateTodoResponse>(APIS.TODO, data);
}
