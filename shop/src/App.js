import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
//image - import 작명 from './파일경로';
import datas from './data.js';


function App() {

  let [iPhone, setIPhone] = useState(datas);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className='navbar_header' fixed ='top'>
        <Container>
          <Navbar.Brand href="#home">Apple Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      {/* <div className='main-bg' style = {{ backgroundIamge: 'url('+ 작염 +')'}}> </div> */}
        <Products_div datas = {datas}/>
      
    </div>
  );
}

function Products_div(props){

  return(
    <div className='container'>
        <div className='row'>
          {datas.map(function (a, i){
            return(
              <div className='col-md-4'> 
                <img src= {process.env.PUBLIC_URL + "/image_src/iPhone" + i +".png"} width= "50%" height = "70%"/>
                <h4>{props.datas[i].title}</h4>
                <p>{props.datas[i].content}</p>
                <p>{props.datas[i].price}</p>
              </div>
            )
          })
          }
      </div>
    </div>
  );
}

export default App;
