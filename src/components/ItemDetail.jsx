import React from "react";
import './styles/ItemDetail.css'

export const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.image} alt=""/>
                <div className="content">
                    <h3>{data.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;