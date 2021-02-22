import React from 'react';
import { useHistory, useParams } from 'react-router-dom';


function Detail(p){

    const history = useHistory();
    let {id} = useParams();

    {/* 21 connect address with id in Data.js
     find() */}
    let findItem = p.shoes.find(function(a){
                return a.id ==id
    })

    return(
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{findItem.title}</h4>        {/*  20, 21 */}
                <p>{findItem.content}</p>
                <p>{findItem.price}$</p>
                <button className="btn btn-danger">order</button> 
                <button className="btn btn-danger" onclick={()=>{
                    history.goBack()
                }}>back</button> 
            </div>
            </div>
         </div> 
    )
}

export default Detail