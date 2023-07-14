"use client";

import React, { useState } from "react";
import todoStore, { TodoModelTypes } from "../features/ToDoStore";
import { observer } from "mobx-react-lite";

function ToDoLists({ id, name, description, status }: TodoModelTypes) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

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
      <tr>
        <td className="text-left px-5 py-2">{id}</td>
        <td className="text-left px-5 py-2">{name}</td>
        <td className="text-left px-5 py-2">{description}</td>
        <td className="text-left px-5 py-2"> {status}</td>
        <td className="text-left px-5 py-2">
          <button
            type="button"
            className="px-4 py-2 mr-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={handleButtonClick}
          >
            Edit
          </button>
        </td>
        <td className="text-left px-5 py-2">
          <button
            type="button"
            className="px-4 py-2 mr-2 bg-[#C30404] hover:bg-red-900 text-white rounded"
            onClick={() => todoStore.deleteTodo(id)}
          >
            Delete
          </button>
        </td>
      </tr>

      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
          <div className="fixed inset-y-0 right-0 w-[20rem] bg-white shadow-lg">
            <div className="p-5 flex justify-end">
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

            <h1 className="text-center text-[28px] text-[#257CFF] font-bold underline">
              Edit ToDos
            </h1>

            <div className="pl-7 mt-5">
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
                onClick={() => todoStore.updateTodo(id)}
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

export default observer(ToDoLists);
