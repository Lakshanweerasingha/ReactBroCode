import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("lmw");
    const [age, setAge] = useState(0);
    const [check, setCheck] = useState(false);

    const updateName = () => {

        setName("lakshan");

    }

    const updateAge = () => {
        
        setAge(age + 1);
    }

    const updateBool = () => {
        setCheck(!check);
    }

return (
    <>
    <p>Name: {name} </p>
    <p>Age: {age}</p>
    <p>Check: {check ? "True" : "False"}</p>
    <button onClick={updateName} >Click Me </button>
    <button onClick={updateAge} >Set Age</button>
    <button onClick={updateBool} >Set Check</button>

    </>
)

}

export default MyComponent