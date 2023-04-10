import React,{useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";

const film = {
    id: 1,
    name: "Test del ItemDetail",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDD19KEgy9HEBXW0CCC2BkRLlcyLmJBZ5x_A&usqp=CAU"
};

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(film)
            },2000)
        });

        getData.then(res => setData(res));
    },[])

    return (
        <ItemDetail data={data}/>
    )
};

export default ItemDetailContainer;