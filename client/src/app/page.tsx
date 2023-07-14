import AddButton from "./components/Add-Button/AddButton";
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
          <AddButton />
          {/* /// Table */}
          <div className="mt-2 grid grid-cols-[2fr,1fr] gap-[20px]">
            <div className="bg-white py-[20px] px-[15px] border-t-4 border-indigo-500">
              <h1 className="font-bold mb-5">Project Progress</h1>
              <table className="border border-red-500 w-full py-8">
                <thead>
                  <tr className="border border-white">
                    <th className="text-left px-5 py-2 bg-[#257CFF] border border-white text-white">
                      #
                    </th>
                    <th className="text-left px-5 py-2 bg-[#257CFF] border border-white text-white">
                      Name
                    </th>
                    <th className="text-left px-5 py-2 bg-[#257CFF] border border-white text-white">
                      Description
                    </th>
                    <th className="text-left px-5 py-2 bg-[#257CFF] border border-white text-white">
                      Status
                    </th>
                    <th className="text-left px-5 py-2 bg-[#257CFF] border border-white text-white">
                      Edit
                    </th>
                    <th className="text-left px-5 py-2 bg-[#257CFF] border border-white text-white">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="border border-teal-600 w-full [&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-200">
                  <ToDoLists />
                  <ToDoLists />
                  <ToDoLists />
                  <ToDoLists />
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 gap-[20px]">
              <ProjectDetailsCards />
              <ProjectDetailsCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
