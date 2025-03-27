import React, {useState} from "react"

function Counter() {


    const [cal, setCal] = useState(20);




const calculatemul = () => {
    setCal(c => c*2)
}

const calculatediv = () => {
    setCal(c => c/2)

}

const calculateplus = () => {
    setCal(c => c+2)

}

const calculatemin = () => {
    setCal(c => c-2)

}
    return (
<>
        <p>do the calculation</p>
        <p>Answer: {cal}</p>
        <button className="buttonCal" onClick={() => {
            setCal(c => c*2);
        }}>cal</button>
        <button onClick={calculatemul}>*</button>
        <button onClick={calculatediv}>/</button>
        <button onClick={calculateplus}>+</button>
        <button onClick={calculatemin}>-</button>

 
</>
)


}


export default Counter