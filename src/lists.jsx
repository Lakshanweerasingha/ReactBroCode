function Lists() {
    
const fruits = [
    {name: "orange", calories: 23},
    {name: "apple", calories: 43},
    {name: "mango", calories: 65},
];

const filtered = fruits.filter(fruit => fruit.calories > 25);




    return(
        <ul> {filtered.map(fruit=><li>{fruit.name} &nbsp; {fruit.calories}</li>)
        
        }
        </ul>
    );
}
export default Lists