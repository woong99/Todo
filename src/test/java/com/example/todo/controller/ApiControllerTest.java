package com.example.todo.controller;

import com.example.todo.dto.Todo;
import com.example.todo.service.TodoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
class ApiControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Mock
    private TodoService todoService;

    @Test
    public void getTodosWithMonthTest() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("http://localhost:8080/api/todos")
        ).andExpect(
                MockMvcResultMatchers.status().isOk()
        ).andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void getTodosWithDateTest() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("http://localhost:8080/api/todos?date=2022-08-13")
        ).andExpect(
                MockMvcResultMatchers.status().isOk()
        ).andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void addTodoTest() throws Exception {
        Todo todo = new Todo();
        todo.setTodoTitle("testTodoTitle");
        todo.setTodoContent("testTodoContent");
        String content = objectMapper.writeValueAsString(todo);
        mockMvc.perform(
                MockMvcRequestBuilders.post("http://localhost:8080/api/add")
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(
                MockMvcResultMatchers.status().isOk()
        ).andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getTodoTest() throws Exception {
        mockMvc.perform(
                        MockMvcRequestBuilders.get("http://localhost:8080/api/todo")
                                .param("id", "3")
                ).andExpect(
                        MockMvcResultMatchers.status().isOk()
                )
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void deleteTodoTest() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.delete("http://localhost:8080/api/todo")
                        .param("id", "28")
        ).andExpect(
                MockMvcResultMatchers.status().isOk()
        ).andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void modifyTodoTest() throws Exception {
        Todo todo = new Todo();
        todo.setTodoTitle("updateTitle");
        todo.setTodoContent("updateContent");
        String content = objectMapper.writeValueAsString(todo);
        mockMvc.perform(
                MockMvcRequestBuilders.put("http://localhost:8080/api/modify")
                        .param("id", "38")
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(
                MockMvcResultMatchers.status().isOk()
        ).andDo(MockMvcResultHandlers.print());
    }
}