package com.example.todo.controller;

import com.example.todo.dto.Todo;
import com.example.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ApiController {

    private final TodoService todoService;

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

    @GetMapping("/list")
    public List<Todo> getTodoList(){
        return todoService.getTodos();
    }
}
