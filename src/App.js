/* eslint-disable */

import React ,{useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Nav ,NavDropdown , Form , FormControl, Button, Jumbotron} from 'react-bootstrap';

import data from './data'

function App() {

  const [shoes, setshoes] = useState(data);
  return (
    <div className="App">

    
    <p className="black-nav">🦄15 react bootstrap (쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치)</p>
    {/*(2)-3  */}

     <div>

    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
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

    <div>
    <div className="container">

    <div className="row">
      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        <h4>{ shoes[0].title }</h4>
        <p>{ shoes[0].content } & { shoes[0].price }</p>
      </div>
      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
        <h4>상품명</h4>
        <p>상품정보</p>
      </div>
      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
        <h4>상품명</h4>
        <p>상품정보</p>
      </div>
    </div>

    <br></br>
    {
      shoes.map( function(a,i){
        return(
        <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes[i].jpg" width="100%" />
        <h4>{ shoes[i].title }</h4>
        <p>{ shoes[i].content } & { shoes[i].price }</p>
      </div>
      )
      }
    )
    }

    <br></br>
    <Card shoes={shoes[0]}></Card>
    <Card shoes={shoes[1]}></Card>
    <Card shoes={shoes[2]}></Card>

    <br></br>
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
  );
}

function Card (p){
  return(<div className="col-md-4">
  <img src={"https://codingapple1.github.io/shop/shoes"+(p.i+1)+".jpg"} width="100%" />
  <h4>{ p.shoes.title }</h4>
  <p>{ p.shoes.content } & { p.shoes.price }</p>
</div>

  )
}

export default App;
