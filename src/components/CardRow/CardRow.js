import React from "react";
import './CardRow.css'
import mydata from './../../mockData/products.json'
import Card from './../Card/Card'

export default function CardRow() {
    let data = mydata

    return (
        <div className={"cardRow"}>
        {
            data.map((item,key)=>
                <Card data={item} key={key}/>
            )
        } 
        </div>
    );
}
