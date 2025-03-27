import { useState } from "react"

function ColorPicker () {
    
    const [color, setColor] = useState("#FFFFFFFF");

    const handleColor = (e) => {
        setColor(e.target.value)
    }
    
    return (
        <div className="main">
        <h1>Color Picker</h1>
    <p className="parargaph" style={{backgroundColor: color}}>select the color: {color}</p>
    <input className="input" type="color" value={color} onChange={handleColor} ></input>
        </div>
    )
}
export default ColorPicker