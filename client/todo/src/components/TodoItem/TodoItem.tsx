import {ITodo} from "../../types/types";
import './styles.css'
export interface ITodoProps {
    todo: ITodo;
    deleteTodo: (arg0: string) => void;
    doneTodo: (arg0:string, arg1:boolean) => void;
}
export const TodoItem = ({todo, deleteTodo, doneTodo}: ITodoProps) => {
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done);
    return (
        <li className={
            `todo-item list-group-item d-flex justify-content-between align-items-center
            ${todo.done ? 'list-group-item-success' : ''}`
        }>
            <div>
                <span className={`${todo.done ? `title-done` : ''}`}>{todo.title}</span>
            </div>
            <div className="d-flex align-items-center">
                <button style={{marginRight: '10px'}} className="btn btn-primary flex-grow-0">Изменить</button>
                <button onClick={handleComplete} style={{marginRight: '10px'}} className="btn btn-success flex-grow-0">Завершить</button>
                <button onClick={handleDelete} className="btn btn-danger flex-grow-0">Удалить</button>
            </div>
        </li>
    )
}