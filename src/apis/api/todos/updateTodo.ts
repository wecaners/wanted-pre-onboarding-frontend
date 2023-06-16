import { AuthApi } from '../axiosConfig';
import { APIS } from '../constants/APIS';

export interface UpdateTodoRequest {
  todo: string;
  isCompleted: boolean;
}

export interface UpdateTodoResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export function updateTodo(id: number, data: UpdateTodoRequest) {
  return AuthApi.put<UpdateTodoResponse>(`${APIS.TODO}/${id}`, data);
}
