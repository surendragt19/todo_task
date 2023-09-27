import React, { useEffect, useState } from 'react'
import NavbarPage from "../components/navbar.jsx";
function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    if(!localStorage.getItem("login")){
        alert("plz login ")
        document.location.href="/login"
    }
},[])

  useEffect(()=>{
      if(localStorage.getItem("localTasks")){
          const storedList = JSON.parse(localStorage.getItem("localTasks"));
          setTasks(storedList);
      }
  },[])

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task)=>{
      const deleted = tasks.filter((t)=>t.id !== task.id);
      setTasks(deleted);
      localStorage.setItem("localTasks", JSON.stringify(deleted))
  }

  const handleClear=()=>{
      setTasks([]);
      localStorage.removeItem("localTasks");
  }


  
  return (
    <div>
      <NavbarPage />
      <div className="container">
   
<div className="container row">
     

        <div className="row my-2">
      <div
        className="col-md-6 col-lg-5 shadow mx-auto mb-2 p-3"
        style={{ background: "white" }}
      >
        <h1 className="h4 text-center my-3">Add Task</h1>

        <div className="row">
          <div className="col-10">
            <input
               name="task"
          type="text"
          value={task}
          placeholder="Write your task..."
          className="form-control"
          onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="col-2">
           
            <button
              className="btn btn-info  text-light bgBtn"
              onClick={addTask}
            style={{backgroundColor:'green'}}>
              ADD
            </button>
          </div>
        </div>
        <div className="badge ">
       <span style={{color:'red'}}> You have
        {!tasks.length
          ? " no tasks"
          : tasks.length === 1
          ? " 1 task"
          : tasks.length > 1
          ? ` ${tasks.length} tasks`
          : null}</span>
      </div>

        <div>
        



      {tasks.map((task) => (
        <React.Fragment key={task.id}>

        <div className="row bg-light shadow p-2 mt-2">
      <div className="col-10">{task.title}</div>
     
      <div className="col-2">
        <button onClick ={()=> handleDelete(task)}className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>

        

            
        </React.Fragment>
      ))}


      {!tasks.length ? null:(
          <div>
              <button className= "btn btn-info  mt-4 mb-4" onClick={()=>handleClear()}>
                  Clear
              </button>
          </div>
      )}
        </div>
      </div>
    </div>



      </div>
     
    </div>
      </div>
  
  );
}

export default Home