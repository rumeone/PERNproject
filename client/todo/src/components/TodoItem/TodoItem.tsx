import {ITodo} from "../../types/types";

export interface ITodoProps {
    todo: ITodo;
}
export const TodoItem = ({todo}: ITodoProps) => {
    return (
        <li>
            <div className="">
                <span>{todo.title}</span>
            </div>
            <div className="">
                <button className="btn btn-primary">Изменить</button>
            </div>
            <div className="">
                <button className="btn btn-success">Завершить</button>
            </div>
            <div className="">
                <button className="btn btn-danger">Изменить</button>
            </div>
        </li>
    )
}