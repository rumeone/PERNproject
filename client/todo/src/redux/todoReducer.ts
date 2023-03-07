import {ITodoAction, ITodoActionTypes, ITodoState} from "../types/types";

export const initialState = {
    todos: []
}

export const todoReducer = (state: ITodoState = initialState, action: ITodoAction) => {
    switch (action.type) {
        case ITodoActionTypes.CREATE_TODO_SUCCESS:
            return {
                todos: [...state.todos, action.payload]
            }
        case ITodoActionTypes.DELETE_TODO_SUCCESS:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case ITodoActionTypes.GET_TODOS_SUCCESS:
            return { ...state, todos: action.payload }
        default:
            return state;
    }
}