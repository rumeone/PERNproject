import {ITodo} from "../../types/types";

export interface ITodoProps {
    todo: ITodo;
    deleteTodo: (arg0: string) => void
}
export const TodoItem = ({todo, deleteTodo}: ITodoProps) => {
    const handleDelete = () => deleteTodo(todo.id);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <span>{todo.title}</span>
            </div>
            <div className="d-flex align-items-center">
                <button style={{marginRight: '10px'}} className="btn btn-primary flex-grow-0">Изменить</button>
                <button style={{marginRight: '10px'}} className="btn btn-success flex-grow-0">Завершить</button>
                <button onClick={handleDelete} className="btn btn-danger flex-grow-0">Удалить</button>
            </div>
        </li>
    )
}