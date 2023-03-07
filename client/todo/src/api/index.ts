import {ITodo, ITodoState} from "../types/types";
import axios from "axios";

export class TodoApi {

    static async getTodos():Promise<ITodoState[]> {
        const res = await axios.get('http://localhost:3000/todos');
        return res.data;
    }
    static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
        const res = await axios.post('http://localhost:3000/todos', todo);
        return res.data;
    }

    static async deleteTodo(id: string): Promise<void> {
         await axios.delete(`http://localhost:3000/todos/${id}`);
    }
}

