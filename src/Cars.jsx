import React, {useState} from "react";
function Cars () {

    const [cars, setCars] = useState(["mazda","corolla"])

    const handleCar = () => {
       
       const test = document.getElementById("car").value
        setCars([...cars,test ])
    }


    const removeCar = (index) => {
        setCars(cars.filter((_,i) => i !== index ));
    }


    return(
        <>
        <h2>cars</h2>
        <ul >
        {cars.map((car,index)  =>
            
            <li key={index} 
          
          onClick={() => removeCar(index)}
          >
                
                {car}</li>  )}
        </ul>
        <input type="text" id="car"></input>
       <button onClick={ handleCar} >add car</button>
        </>
    )
}
export default Cars