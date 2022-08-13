package com.example.todo.service;

import com.example.todo.dto.Todo;

import java.util.List;

public interface TodoService {

    public List<Todo> getTodosWithDate(String date);
}
