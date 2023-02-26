import {ITodo, ITodoState} from "../types/types";
import axios from "axios";

export class TodoApi {
    static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
        const res = await axios.post('http://localhost:3000/todos', todo);
        return res.data;
    }
}

