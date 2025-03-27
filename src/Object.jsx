import { useState } from "react"

function Object () {
    
    const [car , setCar] = useState({
        year: "2004",
        name: "allion",
        model: "mustang"
    })
    
    const handleCar = (e) => {
        setCar({year: e.target.value})
    }

    return (
        <>
        <p>year is : {car.year}</p>
        <input type="number" value={car.year} onChange={handleCar}></input>
<h1>your favourite car is : {car.year} {car.name}</h1>        </>
    )
}

export default Object