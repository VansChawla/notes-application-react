import React, { use, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({title, details});

    setTask(copyTask);

    setTitle('');
    setDetails('');
  };

  const deleteNote = (idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx,1)
    
    setTask(copyTask)

  }

  return (
    <div className="sm:h-[90%] lg:h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 flex-col gap-4 items-start p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* pehla input */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-4 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Doosra input */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="flex flex-row items-start px-5 py-2 w-full h-50 border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white active:scale-98 w-full text-black px-5 py-2 rounded">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div id="scroll-container" className="flex flex-wrap justify-start items-start gap-5 mt-6 lg:h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 sm:w-36 lg:w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-3 leading-tight font-medium text=gray-500">
                    {elem.details}
                  </p>
                </div>
                <button onClick={()=>{
                    deleteNote(idx)
                }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
