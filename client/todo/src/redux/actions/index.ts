import {ITodoActionTypes} from "../../types/types";

export const createTodo = (payload:string) => {
    return {
        type: ITodoActionTypes.CREATE_TODO,
        payload
    }
}

export const deleteTodo = (payload:string) => {
    console.log(ITodoActionTypes.DELETE_TODO + " plus " + payload);
    return {
        type: ITodoActionTypes.DELETE_TODO,
        payload
    }
}