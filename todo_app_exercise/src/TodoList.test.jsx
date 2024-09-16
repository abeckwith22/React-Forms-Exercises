import React from "react";
import { render, fireEvent } from "@testing-library/react"
import TodoList from "./TodoList";
// import Todo from "./Todo";

function addTodo(todoList, message="testing example"){
    const messageInput = todoList.getByLabelText("Todo:");
    fireEvent.change(messageInput, {target: { value: message }});
}

it('renders without crashing', function(){
    render(<todoList/>);
})

it('matches snapshot', function() {
    const { asFragment } = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
})

it("adds a todo to todoList", function() {
    const list = render(<todoList/>);
    expect(list.getByLabelText("testing example")).not.toBeInTheDocument();
    addTodo(list);

    // adds todo
    expect(list.getByLabelText("testing example")).toBeInTheDocument();
})

it("edits a todo to todoList", function() {
    const list = render(<todoList/>);
    addTodo(list);

    // clicks edit button on new todo
    const editButton = list.getByText("Edit Todo");
    fireEvent.click(editButton);

    // sets input to `new task`
    const editMessageInput = todoList.getByLabel("Edit Todo:");
    fireEvent.change(editMessageInput, {target: {value: "new task"}});
    
    // clicks submit new todo button
    const editMessageSubmitButton = todoList.getByText("Submit New Todo");
    fireEvent.click(editMessageSubmitButton);

    // expect new todo/task to be `new task`
    expect(list.getByLabelText("new task")).toBeInTheDocument();
})

it("removes a todo from todoList", function() {
    const list = render(<todoList/>);
    addTodo(list);
    // checks added to document
    expect(list.getByLabelText("testing example")).toBeInTheDocument();
    // clicks remove todo button
    const removeButton = list.getByText("Remove Todo");
    fireEvent.click(removeButton);
    // checks if removed from document
    expect(list.getByLabelText("testing example")).not.toBeInTheDocument();
})