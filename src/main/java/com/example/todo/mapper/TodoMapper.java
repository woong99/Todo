package com.example.todo.mapper;

import com.example.todo.dto.Todo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface TodoMapper {
        List<Todo> getTodos();
}
