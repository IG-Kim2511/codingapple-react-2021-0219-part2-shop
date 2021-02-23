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
            
                    {
                        p.store.map((a,i)=>{
                            return(
                                <tr>
                                    <td>1</td>
                                    <td>{p.store[0].id} </td>
                                    <td>{p.store[0].name} </td>
                                    <td>{p.store[0].quan} </td>
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


