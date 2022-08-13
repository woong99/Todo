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
    public List<Todo> getTodosWithDate(String date) {
        return todoMapper.getTodosWithDate(date);
    }
}
