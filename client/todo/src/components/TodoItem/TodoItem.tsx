import {ITodo} from "../../types/types";

export interface ITodoProps {
    todo: ITodo;
}
export const TodoItem = ({todo}: ITodoProps) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <span>{todo.title}</span>
            </div>
            <div className="d-flex align-items-center">
                <button style={{marginRight: '10px'}} className="btn btn-primary flex-grow-0">Изменить</button>
                <button style={{marginRight: '10px'}} className="btn btn-success flex-grow-0">Завершить</button>
                <button className="btn btn-danger flex-grow-0">Удалить</button>
            </div>
        </li>
    )
}