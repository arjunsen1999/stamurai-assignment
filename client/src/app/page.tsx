import HeadingContainer from "./components/HeadingContainer";
import ProjectDetailsCards from "./components/ProjectDetailsCards";
import TaskDetailsCards from "./components/TasksDetailsCards";
import ToDoLists from "./components/ToDoLists";
import WelcomeConatiner from "./components/WelcomeConatiner";

export default function Home() {
  return (
    <>
      <div className="w-full">
        {/* // Heading */}
        <HeadingContainer heading="Home" />
        <div className="py-1 px-2 my-5">
          {/* // Code here */}
          <WelcomeConatiner para={"Welcome Administrator !"} />
          <div className="border border-teal-500 w-full mb-5"></div>
          {/* /// Table */}
          <div className="mt-2 grid grid-cols-[2fr,1fr] gap-[20px]">
            <div className="border bg-white py-[20px] px-[15px]">
              <h1 className="font-bold mb-5">Project Progress</h1>
              <table className="border border-red-500 w-full py-8">
                <thead>
                  <tr>
                    <th className="text-left px-5 py-2">#</th>
                    <th className="text-left px-5 py-2">Name</th>
                    <th className="text-left px-5 py-2">Description</th>
                    <th className="text-left px-5 py-2">Status</th>
                    <th className="text-left px-5 py-2">Edit</th>
                    <th className="text-left px-5 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody className="border border-teal-600 w-full">
                  <ToDoLists />
                  <ToDoLists />
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 gap-[20px]">
              <ProjectDetailsCards />
              <TaskDetailsCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
