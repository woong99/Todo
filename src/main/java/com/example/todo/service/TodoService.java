package com.example.todo.service;

import com.example.todo.dto.Todo;

import java.util.List;

public interface TodoService {

    public List<Todo> getTodos();

    public List<Todo> getTodosWithDate(String date);

    public void addTodo(Todo todo);

    public Todo getTodo(int id);

    public void deleteTodo(int id);

    public void modifyTodo(int id, Todo todo);
}
