package com.example.todo.mapper;

import com.example.todo.dto.Todo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface TodoMapper {

    List<Todo> getTodosWithDate(@Param("date") String date);

    void addTodo(Todo todo);

    Todo getTodo(@Param("id") int id);

    void deleteTodo(@Param("id") int id);

    void modifyTodo(@Param("id") int id, @Param("todo") Todo todo);
}
