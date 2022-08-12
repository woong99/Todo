package com.example.todo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    private int todoId;
    private String todoTitle;
    private String todoContent;
    private LocalDateTime todoDate;
}
