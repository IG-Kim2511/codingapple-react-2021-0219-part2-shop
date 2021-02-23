/* eslint-disable */

{/* library */}
import React ,{useState} from 'react';  {/* 18 */}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Nav ,NavDropdown , Form , FormControl, Button, Jumbotron} from 'react-bootstrap';
import {Route, Link, Switch} from 'react-router-dom'; {/* 19 */}
import axios from 'axios'


{/* components */}
import './css/App.css';
import data from './components/data'
import  Detail  from "./components/Detail";
import  Cart  from "./components/Cart";

// <button onclick={()=>{  console.log( ) }}>test</button>


function App() {

  const [shoes, setshoes] = useState(data);

  {/* 25 재고 */}
  const [inventory, setInventory] = useState([10,11,12])

  return (
    <div className="App">    
    <p className="black-nav">react </p>
    
       <nav>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {/* 19 */}
              <Nav.Link as={Link} to="/" > <Link to='/'>Home</Link> </Nav.Link>
              <Nav.Link as={Link} to="/cart" > <Link to='/cart'>Cart</Link> </Nav.Link>
              <Nav.Link as={Link} to="/detail/0" > detail0 </Nav.Link>
              <Nav.Link as={Link} to="/detail/1" > detail1 </Nav.Link>
              <Nav.Link as={Link} to="/detail/2" >  detail2 </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>   
      </nav>

       {/* 19 */}
       <div>
        <Switch>
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

              {/* ajax */}
                <div>
                  <button className="btn btn-primary" onClick={()=>{ 

                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((a)=>{
                      console.log(a.data)
                      setshoes([...shoes,...a.data]);
                    }).catch(()=>{ 
                      console.log('fail')
                    })
                  }}>more</button>       
                </div>
          </Route>
          
          {/*  20 */}     {/*  21 */}           
          <Route path="/detail/:id">
                  <Detail shoes={shoes} inventory={inventory}/>
          </Route>
  
          <Route path="/cart">
                  <Cart></Cart>
          </Route>
        </Switch>      
       </div>

      

{/*  */}
    </div>
  );
}

{/* 18 */}
function Card (p){
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+(p.i+1)+".jpg"} width="100%" />
      <h4>{ p.shoes.title }</h4>
      <p>{ p.shoes.content } & { p.shoes.price }</p>
    </div>
  )
}

export default App;
