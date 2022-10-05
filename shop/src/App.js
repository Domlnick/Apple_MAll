import './App.css';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { useState } from 'react';
//image - import 작명 from './파일경로';
import datas from './data.js';
import {Products, About, Event} from './Routes/Pages.js';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// useNavigate() : page 이동 도와주는 함수
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

function App() {

  let [iPhone, setIPhone] = useState(datas);

  let navigate = useNavigate();

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark" className='navbar_header'>
        <Container>
          <Navbar.Brand href="/">Apple Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart" onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
        <>
          <div className='main-bg'></div>
          <Products_div iPhone = {iPhone} setIPhone = {setIPhone}/>
        </>}/>

        <Route path="/products/:id" element={
        
          <Products iPhone={iPhone}/>
        }/>
        <Route path="/cart" element={<div>아직 구현중입니다.</div>}/> 
        <Route path="/about" element={<About/>}>
          <Route path='members' element = {
            <div>
              <div className="container">
                <div className="row">
                    <div className='col-md-6'>                       
                        <img src= {process.env.PUBLIC_URL + "/image_src/profile1.jpeg"} width= "80%"/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">Dominic</h4>
                        <p>https://github.com/Domlnick</p>
                    </div>
                </div>
              </div>
        
            </div>}/>
          <Route path='location' element = {<About/>}/>
        </Route> 
        <Route path = "/event" element = {<Event/>}>
          <Route path = "one" element={
            <>
            <div className="container">
              <h6> 첫 주문시 아이폰 10% 할인 서비스</h6>
            </div>
            </>
          }/>
          <Route path ="two" element={
            <>
            <div className="container">
              <h6> 생일기념 쿠폰받기</h6>
            </div>
            </>    
          }/>
        </Route>
        <Route path = "*" element = {<div> 404 Error : 없는 페이지 입니다.</div>}/>
      </Routes>
      
    </div>
  );
}

function Products_div(props){

  return(
    <div className='container'>
        <div className='row'>
          {props.iPhone.map(function (a, i){
            return(
              <div className='col-md-4'> 
                <Link to = {"/products/" + i}>
                  <img src= {process.env.PUBLIC_URL + "/image_src/apple" + (i+1) +".png"} width= "50%" height = "70%" />
                </Link>
                <h4>{props.iPhone[i].title}</h4>
                <p>{props.iPhone[i].content}</p>
                <p>{props.iPhone[i].price}</p>
              </div>
            )
          })
          }
          <button className="btn btn-danger" onClick={() => {
            axios.get('https://github.com/Domlnick/Apple_MAll/blob/main/shop/data2.json')
            .then((data) => {
              console.log(data.data)

              let copy = [...props.iPhone, ...data.data];
              props.setIPhone(copy);

            })
            .catch(() => {
              alert('요청한 url이 존재하지 않거나 해당 url에 데이터가 없습니다.')
            })
          }}>다른 제품 보기</button>
      </div>
    </div>
  );
}

export default App;
