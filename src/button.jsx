function Button() {

    const clicked = (e) => {
console.log(e);
    }
    
    return (

    <button className="button" onClick={ (e) => clicked(e)}>Click me</button>        
    );
}

export default Button;