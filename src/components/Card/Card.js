import React from "react";
import {
    Link
} from "react-router-dom";
import './Card.css'

export default function Card(props) {
    let data = props.data
    return (
        <div className={"card"}>
            <Link className="cardLink" to={"/post?id=" + data.id}  >
                <div className="imageWrapper">
                    <img src={data.imageUrl} alt={data.title} />
                </div>
                <h3>{data.title}</h3>
                <p className={'description'}>{data.description}</p>
            </Link>
        </div>
    );
}
