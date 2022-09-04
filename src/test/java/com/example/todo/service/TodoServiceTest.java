package com.example.todo.service;

import com.example.todo.dto.Todo;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Slf4j
class TodoServiceTest {

    @Autowired
    private TodoService todoService;

    @Test
    public void getTodosWithMonthTest() {
        List<Todo> todos = todoService.getTodos();
        log.info(String.valueOf(todos));
    }

    @Test
    public void getTodosWithDateTest() {
        List<Todo> todos = todoService.getTodosWithDate("2022-08-13");
        log.info(String.valueOf(todos));
    }

    @Test
    public void addTodoTest() {
        log.info("------------ Before add --------------");
        List<Todo> todos = todoService.getTodosWithDate("2022-08-14");
        todos.forEach(todo -> {
            log.info(String.valueOf(todo));
        });
        Todo todo1 = new Todo();
        todo1.setTodoTitle("todo1");
        todo1.setTodoContent("content1");

        Todo todo2 = new Todo();
        todo2.setTodoTitle("todo2");

        todoService.addTodo(todo1);
        todoService.addTodo(todo2);

        log.info("------------ After add --------------");
        todos = todoService.getTodosWithDate("2022-08-14");
        todos.forEach(todo -> {
            log.info(String.valueOf(todo));
        });
    }

    @Test
    public void getTodoTest() {
        Todo todo = todoService.getTodo(3);
        log.info(String.valueOf(todo));
    }

    @Test
    public void deleteTodoTest() {
        log.info("------------ Before add --------------");
        List<Todo> todos = todoService.getTodosWithDate("2022-08-14");
        todos.forEach(todo -> {
            log.info(String.valueOf(todo));
        });

        todoService.deleteTodo(31);

        log.info("------------ After add --------------");
        todos = todoService.getTodosWithDate("2022-08-14");
        todos.forEach(todo -> {
            log.info(String.valueOf(todo));
        });

    }

    @Test
    public void updateTodoTest() {
        log.info("------------ Before Update --------------");
        Todo todo = todoService.getTodo(38);
        log.info(String.valueOf(todo));


        log.info("------------ After Update --------------");
        Todo newTodo = new Todo();
        newTodo.setTodoTitle("Update");
        newTodo.setTodoContent("Update");
        todoService.modifyTodo(38, newTodo);
        todo = todoService.getTodo(38);
        log.info(String.valueOf(todo));

    }
}