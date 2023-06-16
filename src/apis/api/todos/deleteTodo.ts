import { AuthApi } from '../axiosConfig';
import { APIS } from '../constants/APIS';

export type DeleteTodoResponse = void;

export function deleteTodo(id: number) {
  return AuthApi.delete<DeleteTodoResponse>(`${APIS.TODO}/${id}`);
}
