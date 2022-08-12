package com.example.todo.service;

import com.example.todo.dto.Todo;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
class TodoServiceTest {

    @Autowired
    private TodoService todoService;

    @Test
    public void getTodos(){
        List<Todo> todos = todoService.getTodos();
        todos.forEach(todo -> {
            log.info(String.valueOf(todo));
        });
    }
}