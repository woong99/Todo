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


//    @GetMapping("/todos")
//    public List<Todo> getTodos() {
//        return todoService.getTodos();
//    }

    @GetMapping("/todos")
    public List<Todo> getTodosWithDate(@RequestParam String date) {
        return todoService.getTodosWithDate(date);
    }

    @PostMapping("/add")
    public void addTodo(@RequestBody Todo todo) {
        todoService.addTodo(todo);
    }

    @GetMapping("/todo")
    public Todo getTodo(@RequestParam int id) {
        return todoService.getTodo(id);
    }

    @DeleteMapping("/todo")
    public void deleteTodo(@RequestParam int id) {
        todoService.deleteTodo(id);
    }

    @PutMapping("/modify")
    public void modifyTodo(@RequestParam int id, @RequestBody Todo todo) {
        System.out.println(todo);
        todoService.modifyTodo(id, todo);
    }
}
