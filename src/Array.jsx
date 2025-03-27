import React, {useState} from "react"

function Array () {
    
    const [foods, setFoods] = useState(["apple","pineapple","mango"]);

    const addfood = (e) => {
        console.log(e)
        const test = document.getElementById("foods").value;
      document.getElementById("foods").value = "";
        setFoods([...foods, test]);
    }

    function removefood (index){
        setFoods(foods.filter((_, i ) => i !== index));
    }

    return (
        <>
        <h2>name of the foods</h2>
        <ul> {foods.map((food, index ) => <li  key={index} onClick={() => removefood(index)} >{food}</li>)}
    <input  type="text" id="foods" ></input>
    <button onClick={addfood}>add fruit</button>
        </ul>
        </>
    )
 }
 export default Array