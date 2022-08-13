package com.example.todo.controller;

import com.example.todo.dto.Todo;
import com.example.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ApiController {

    private final TodoService todoService;

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

//

    @GetMapping("/todos")
    public List<Todo> getTodosWithDate(@RequestParam String date) {
        return todoService.getTodosWithDate(date);
    }

    @PostMapping("/add")
    public Todo addTodo(@RequestBody Todo todo) {
        System.out.println(todo);
        return todo;
    }
}
