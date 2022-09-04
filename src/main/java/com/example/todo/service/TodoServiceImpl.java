package com.example.todo.service;

import com.example.todo.dto.Todo;
import com.example.todo.mapper.TodoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoMapper todoMapper;

    @Override
    public List<Todo> getTodos() {
        return todoMapper.getTodos();
    }

    @Override
    public List<Todo> getTodosWithDate(String date) {
        return todoMapper.getTodosWithDate(date);
    }

    @Override
    public void addTodo(Todo todo) {
        todoMapper.addTodo(todo);
    }

    @Override
    public Todo getTodo(int id) {
        return todoMapper.getTodo(id);
    }

    @Override
    public void deleteTodo(int id) {
        todoMapper.deleteTodo(id);
    }

    @Override
    public void modifyTodo(int id, Todo todo) {
        todoMapper.modifyTodo(id, todo);
    }
}
