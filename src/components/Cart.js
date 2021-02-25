import React from 'react'

import {Table} from 'react-bootstrap'


const Cart = (p) => {
    return (
        <div>
           <Table responsive="md">
                <thead>
                <tr>
                    <th>#</th>
                    <th> name </th>
                    <th> amount </th>
                    <th> change </th>
                  
                </tr>
                </thead>
                <tbody>            
                {/* 33 */}
                    {
                        p.store.map((a,i)=>{
                            return(
                                <tr>
                                    <td>{a.id} </td>
                                    <td>{a.name} </td>
                                    <td>{a.quan} </td>
                                    <td><button className="myButton" onClick={()=>{p.dispatch({type:'plus'})}}>+</button> </td>
                                </tr>
                            )
                        })
                    }
              
                </tbody>
            </Table>
        </div>
    )
}

export default Cart

