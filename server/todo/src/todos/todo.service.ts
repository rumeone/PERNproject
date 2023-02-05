import {Injectable} from "@nestjs/common";
import {InjectConnection, InjectModel} from "@nestjs/sequelize";
import {Todo} from "./models/todo.model";
import {Model} from "sequelize-typescript";
import {CreateTodoDto} from "./dto/create.todo.dto";
import {ChangeTodoDto} from "./dto/change.todo.dto";

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo) private todoModel: typeof Todo) {
    }

    async findAll(): Promise<Todo[]> {
        return this.todoModel.findAll();
    }

    async findOne(id: string): Promise<Todo> {
        return this.todoModel.findOne(
            {
                where: {id}
            }
        );
    }

    async create(createTodo: CreateTodoDto): Promise<Todo> {
        const todo = new Todo();

        todo.title = createTodo.title;
        todo.done = createTodo.done;

        return todo.save();
    }

    async update(id: string, changeTodo: ChangeTodoDto): Promise<[affectedCount: number, affectedRows: Todo[]]> {
        return this.todoModel.update({...changeTodo}, {
            where: {id},
            returning: true
        })
    }

    async remove(id: string): Promise<void> {
        const todo = await this.findOne(id);
        await todo.destroy();
    }
}