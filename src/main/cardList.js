import './App.css'
import React from "react";
import Card from "./card";
const CardList = ({profiles}) => {
    return (
        <div>
            {profiles.map((e) => <Card profile={e}/>)}
        </div>
    );
}
 
export default CardList;