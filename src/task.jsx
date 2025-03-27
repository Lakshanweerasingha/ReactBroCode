import React, {useState} from "react";




function Task () {

    const [tasks, setTasks] = useState(["eat", "drink", "write"])
const [newTasks, setNewTasks] = useState("")

    function handleDelete(index) {
      const deleted = tasks.filter((_,i) => i !== index);
      setTasks(deleted)
    }

    const handlemove = (index) => {
        if(index !== 0) {
       const setted = [...tasks];
       [ setted[index] , setted[index -1]] = [setted[index -1], setted[index]]
                
        setTasks(setted)
    }}

return (
<>
<ul>{tasks.map((task, index) => <li key={index}>
<span className="text">{task}</span>
<button className="button" onClick={() => handleDelete(index)}>Delete</button>
<button className="button" onClick={() => handlemove(index)}>move</button>

</li>)}
</ul>
</>    

)
}

export default Task
