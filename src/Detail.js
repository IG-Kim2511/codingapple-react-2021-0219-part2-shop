import React from 'react';
import { useHistory } from 'react-router-dom'


function Detail(){

    let history = useHistory();

    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">name</h4>
            <p>explain</p>
            <p>120$</p>
            <button className="btn btn-danger">order</button> 
            <button className="btn btn-danger" onclick={()=>{
                history.goBack();
            }}>back</button> 
          </div>
        </div>
         </div> 
    )
}

export default Detail