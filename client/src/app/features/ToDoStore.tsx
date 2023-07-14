"use client";
import { makeAutoObservable } from "mobx";
import notification from "../Toast";

export interface TodoModelTypes {
  id: number;
  name: string;
  description: string;
  status: string;
}

class TodoStrore {
  todoList: TodoModelTypes[] = JSON.parse(window.localStorage.getItem("ToDo") || "[]");
  todo: TodoModelTypes = this.resetTodoData();
  totalTodo: number = this.todoList.length || 0;
  totalProgress: number = this.totalProgressData();
  totalComplete: number = this.totalCompleteData();

  totalProgressData() {
   let count = 0;
   this.todoList.forEach((ele) =>{
    if(ele.status == "In Progress"){
        count++;
    }
   })
    return count;
  }

  totalCompleteData() {
    let count = 0;
   this.todoList.forEach((ele) =>{
    if(ele.status == "Completed"){
        count++;
    }
   })
    return count;
  }
  resetTodoData() {
    return {
      id: Date.now(),
      name: "",
      description: "",
      status: "",
    };
  }
  constructor() {
    makeAutoObservable(this);
  }
  addTodo() {
    this.todoList.push(this.todo);
    this.updateLocalStorage();
    this.totalTodo = this.todoList.length || 0;
    notification("success", "ToDo Added Successfully!")
    this.totalProgress = this.totalProgressData();
    this.totalComplete = this.totalCompleteData();
    this.todo = this.resetTodoData();
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(
      (todo: TodoModelTypes) => todo.id !== id
    );
    this.totalTodo = this.todoList.length || 0;
    this.totalProgress = this.totalProgressData();
    this.totalComplete = this.totalCompleteData();
    this.updateLocalStorage();
    notification("success", "ToDo Deleted Successfully!")
  }

  updateTodo(id: number) {
    this.todoList.forEach((ele: TodoModelTypes) => {
      if (ele.id == id) {
        ele.name = this.todo.name !== "" ? this.todo.name : ele.name;
        ele.description =
          this.todo.description !== ""
            ? this.todo.description
            : ele.description;
        ele.status = this.todo.status !== "" ? this.todo.status : ele.status;
      }
    });
    this.todoList = this.todoList;
    this.totalProgress = this.totalProgressData();
    this.totalComplete = this.totalCompleteData();
    this.updateLocalStorage();
    this.todo = this.resetTodoData();
    notification("success", "ToDo Updated Successfully!")
  }
  private updateLocalStorage() {
    window.localStorage.setItem("ToDo", JSON.stringify(this.todoList));
  }
}

const todoStore = new TodoStrore();
export default todoStore;
