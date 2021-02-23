import React from 'react'

import {Table} from 'react-bootstrap'


const Cart = () => {
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
                <tr>
                    <td>1</td>
                    <td>Table </td>
                    <td>Table </td>
                    <td>Table </td>
            
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table </td>
                    <td>Table </td>
                    <td>Table </td>
                
                </tr>
         
                </tbody>
            </Table>
        </div>
    )
}

export default Cart


