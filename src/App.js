/* eslint-disable */
{/* 18 */}

import React ,{useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Nav ,NavDropdown , Form , FormControl, Button, Jumbotron} from 'react-bootstrap';

{/* 19 */}
import {Link, Route,Switch} from 'react-router-dom';


import data from './data'

function App() {

  const [shoes, setshoes] = useState(data);
  return (
    <div className="App">    
    <p className="black-nav">react </p>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail">detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
         </Navbar>    
      </div>


       {/* 19 */}
       <div>

        <Route exact path='/'>       
              <div>
              <div className="container">

                <div className="row">     
                {/* 18 */}   
                  {
                      shoes.map( function(a,i){
                          return(  
                            <Card shoes={a} i={i}></Card>
                        )
                      }
                    )
                  }
              </div>
              </div>
            </div>
        </Route>

        <Route path="/detail">
            <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
              </div>
            </div>
             </div> 
        </Route>
        
       </div>





{/*  */}
    </div>
  );
}

{/* 18 */}
function Card (p){
  return(<div className="col-md-4">
  <img src={"https://codingapple1.github.io/shop/shoes"+(p.i+1)+".jpg"} width="100%" />
  <h4>{ p.shoes.title }</h4>
  <p>{ p.shoes.content } & { p.shoes.price }</p>
</div>

  )
}

export default App;
