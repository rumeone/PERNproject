import {ITodo} from "../../types/types";
import './styles.css'
import {ChangeEvent, useState} from "react";
export interface ITodoProps {
    todo: ITodo;
    deleteTodo: (arg0: string) => void;
    doneTodo: (arg0:string, arg1:boolean) => void;
    changeTodo: (arg0: string, arg1:boolean, arg2:string) => void;
}
export const TodoItem = ({todo, deleteTodo, doneTodo, changeTodo}: ITodoProps) => {
    const [isTodoEdit, setIsTodoEdit] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            changeTodo(newTitle, todo.done, todo.id);
            setIsTodoEdit(!isTodoEdit);
        }
    }
    const handleTodoEdit = () => {
        setIsTodoEdit(!isTodoEdit);
    }
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done);
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    }


    return (
        <li className={
            `todo-item list-group-item d-flex justify-content-between align-items-center
            ${todo.done ? 'list-group-item-success' : ''}`
        }>
            <div onKeyDown={handleSubmit}>
                {isTodoEdit ? <input type="text" onChange={handleTitleChange}/> : <span className={`${todo.done ? `title-done` : ''}`}>{todo.title}</span>}
            </div>
            <div className="d-flex align-items-center">
                <button onClick={handleTodoEdit} style={{marginRight: '10px'}} className="btn btn-primary flex-grow-0">Изменить</button>
                <button onClick={handleComplete} style={{marginRight: '10px'}} className="btn btn-success flex-grow-0">Завершить</button>
                <button onClick={handleDelete} className="btn btn-danger flex-grow-0">Удалить</button>
            </div>
        </li>
    )
}