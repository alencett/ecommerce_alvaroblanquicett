import React,{useState,useEffect} from "react";
import Title from "./Title";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const films = [{
    id: 1,
    name: "Movie1",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDD19KEgy9HEBXW0CCC2BkRLlcyLmJBZ5x_A&usqp=CAU"
},
{
    id: 2,
    name: "Movie2",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_b1KvjNxL9Ya7mh2CDzeOa3Dtu7nba3c4Q&usqp=CAU"
},
{
    id: 3,
    name: "Movie3",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJDWRO-VyT3LeDzGWDyYWqvJFyyG8nydscQ&usqp=CAU"
}
]

export const ItemListContainer = ({texto}) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000)
        });
        getData.then(res => setData(res));
    },[])

    const onAdd = (quantity) => {
        if(quantity === 1) { 
            console.log(`Compraste ${quantity} unidad!`)}
        else {
            console.log(`Compraste ${quantity} unidades!`)  
        }
    }

    return (
        <>
            < Title greeting={texto}/>
            < ItemCount initial={1} stock={5} onAdd={onAdd}/>
            < ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;