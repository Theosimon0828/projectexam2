import React from "react";
import FavItem from './FavItem'

const FavList = ({value}) => {
    const {fav} = value;
    return (
       <div className="container-fluid">
           {fav.map(item => {
               return  <FavItem key={item.id} item={item} value={value}/>
           })}
        </div> 
       
    );
}

export default FavList;