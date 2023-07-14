"use client";

import React, { useState, ChangeEvent } from "react";
import "./AddButton.css";
import todoStore from "@/app/features/ToDoStore";
import { observer } from "mobx-react-lite";

function AddButton() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSave = () => {
    // Handle save logic here
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="button"
        data-drawer-target="drawer-right-example"
        data-drawer-show={isDrawerOpen ? "drawer-right-example" : ""}
        data-drawer-placement="right"
        aria-controls="drawer-right-example"
        onClick={handleButtonClick}
      >
        <span className="button__text">Add ToDo</span>

        <span className="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>

      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
          <div className="fixed inset-y-0 right-0 w-[20rem] bg-white shadow-lg">
            <div className="p-5 flex justify-end">
              {/* Content of the right drawer */}
              <button
                type="button"
                className="ml-2 text-gray-500"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                  height="24"
                  fill="none"
                  className="svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="pl-7">
              <p className="text-[25px] ">Title</p>
              <input
                type="text"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Title..."
                value={todoStore.todo.name}
                onChange={(event) => (todoStore.todo.name = event.target.value)}
              />
              <p className="text-[22px] mt-7">Description</p>
              <input
                type="text"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Description"
                value={todoStore.todo.description}
                onChange={(event) =>
                  (todoStore.todo.description = event.target.value)
                }
              />
              <p className="text-[22px] mt-7">Status</p>
              <select
                name=""
                id=""
                value={todoStore.todo.status}
                onChange={(event) =>
                  (todoStore.todo.status = event.target.value)
                }
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" selected disabled>
                  --Select Status--
                </option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              {/* <input
                type="text"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Description"
                value={todoStore.todo.description}
                onChange={(event) => (todoStore.todo.description = event.target.value)} */}
              {/* /> */}
            </div>

            <div className="flex justify-start p-6 mt-[0px]">
              <button
                type="button"
                className="px-4 py-2 mr-2 bg-gray-300 rounded"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSave}
                onClick={() => todoStore.addTodo()}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default observer(AddButton);
