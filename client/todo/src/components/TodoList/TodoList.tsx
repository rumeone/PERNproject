import { useDispatch, useSelector } from "react-redux"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { ITodoReducer } from '../../types/types';
import { TodoItem } from "../TodoItem/TodoItem";
import './styles.css'
import {deleteTodo} from "../../redux/actions";

export const TodoList = () => {
    const state = useSelector((state: ITodoReducer) => state.todoReducer);
    const dispatch = useDispatch();
    const removeTodo = (id:string) => {
        dispatch(deleteTodo(id));

    }

    return (
        <TransitionGroup component='ul' className='list-group'>
            {state.todos.map(todo => (
                <CSSTransition
                    timeout={800}
                    classNames={'todo'}
                    key={todo.id}
                >
                    <TodoItem
                        todo={todo}
                        deleteTodo={removeTodo}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}