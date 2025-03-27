import React, {useState} from "react";

function OnChange () {

    const [name, setName] = useState();
    const [payment, setPayment] = useState("select payment");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handlePayment = (e) => {
        setPayment(e.target.value)
    }

    return (
    <>
    <p>Name: {name} </p>
<input value={name} onChange={handleChange} ></input>    
<select value={payment} onChange={handlePayment}>
<option>select</option>
    <option>card</option>
    <option>cash</option>
</select>
<p>payment method: {payment}</p>
    </>
)
}
export default OnChange