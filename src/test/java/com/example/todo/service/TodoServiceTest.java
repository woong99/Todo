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
    public void getTodosTest() {
        List<Todo> todos = todoService.getTodos();
        todos.forEach(todo -> {
            log.info(String.valueOf(todo));
        });
    }

    @Test
    public void getTodosWithDateTest() {
        List<Todo> todos = todoService.getTodosWithDate("2022-08-13");
        log.info(String.valueOf(todos));
    }
}