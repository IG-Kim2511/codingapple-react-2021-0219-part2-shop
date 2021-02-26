import React from 'react'

import {Table} from 'react-bootstrap'
import { connect } from 'react-redux'


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
                <tbody>            
                {/* 34 index.js */}
                    {
                        p.props1.map((a,i)=>{
                            return(
                                <tr>
                                    <td>{a.id} </td>
                                    <td>{a.name} </td>
                                    <td>{a.quan} </td>
                                    <td><button className="myButton" onClick={()=>{p.dispatch({type:'plus'})}}>+</button> </td>
                                    <td><button className="myButton" onClick={()=>{p.dispatch({type:'minus'})}}>-</button> </td>
                                </tr>
                            )
                        })
                    }
              
                </tbody>
            </Table>


            <div>
                    <div className='my-alert2'>
                        <p> 20 % sale</p>
                        <button> close alert</button>
                    </div>
            </div>
            {
                p.props2 ===true
                ?(<div className='my-alert2'>
                <p>20%sale</p>

                <button onClick={()=>{
                    p.dispatch({type:'closeAlert'})
                }}> close alert</button>
                    </div>

                )
                : null


            }

        </div>

    )
}


function mapDispatchToProps(state) {
    return{
        props1 : state.reducer,
        props2 : state.reducer2,

    }
    
}

export default connect(mapDispatchToProps);

