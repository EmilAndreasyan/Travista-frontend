export default function fetchItems (){
        fetch('http://localhost:3000/api/v1/items')
        .then(resp => resp.json())
        .then(data => console.log(data))
}