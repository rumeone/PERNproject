import {TodoService} from "./todo.service";
import {Body, Controller, Delete, Get, Head, Header, HttpCode, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {CreateTodoDto} from "./dto/create.todo.dto";
import {ChangeTodoDto} from "./dto/change.todo.dto";
@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {
    }

    @Get()
    getAllTodos() {
        return this.todoService.findAll();
    }

    @Get(':id')
    getOneTodos(@Param('id') id: string) {
        return this.todoService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    createTodo(@Body() createTodo: CreateTodoDto) {
        return this.todoService.create(createTodo);
    }

    @Patch(':id')
    changeTodo(@Param('id') id: string, @Body() changeTodo: ChangeTodoDto) {
        return this.todoService.update(id, changeTodo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string) {
        return this.todoService.remove(id);
    }
}