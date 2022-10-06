import datas from "../data.js";
import { Outlet, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { pushCart } from '../Store/changeStock.js'
import {useDispatch} from 'react-redux'



function Products(props) {

    let iPhone = [...props.iPhone]
    let {id} = useParams()
    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [num, setNum] = useState('')
    let [tab, setTab] = useState(0)
    let [fade, setFade] = useState('')
    let products = props.iPhone.find(function(x){
        return x.id == id
    })
    let dispatch = useDispatch()

    useEffect(() => {
        if (isNaN(num) == true){
            window.alert('숫자만 입력해 주세요')
        }
        let a = setTimeout(() => { setFade('endPage')}, 100)
        return() => {
            clearTimeout(a)
            setFade('')
        }
            
    }, [num])

    return (
        <>
            <div className={`container startPage ${fade}`}>
                {
                    alert == true
                    ? <div className="alert alert-warning">
                        3초 이내 구매시 5% 할인 이벤트
                    </div>
                    : null
                }
                
                <div className="row">
                    <div className='col-md-6'> 
                    
                    <img src= {process.env.PUBLIC_URL + '/image_src/apple' + (Number(id) + 1)+ '.png'} width= "100%" />
                        
                    </div>
                    
                    <div className="col-md-6">
                        <h4 className="pt-5">{products.title}</h4>
                        <p>{products.content}</p>
                        <p>{products.price}</p>
                        수량 : <input onChange={(e) => {setNum(e.target.value)}}/><br/><br/>
                        <button className="btn btn-danger">상품 주문</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-danger" onClick={() => {
                            console.log(products)
                            dispatch(pushCart( {id : products.id, title : products.title, stock : products.stock, price : products.price} ))
                            
                            }}>장바구니 추가</button>
                    </div>
                </div>

                <Nav justify variant="tabs" defaultActiveKey="/products/1">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => {setTab(0)}}>상품 후기</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => {setTab(1)}}>제품 Q &amp; A</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => {setTab(2)}}>상품 정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab = {tab} id = {id} iPhone = {iPhone}/>

            </div>
        </>
    );
}
function TabContent({tab, id, iPhone}) {

    let content = [<div><br/>상품후기란 입니다.</div>, <div><br/>제품문의란 입니다.</div>, 
            <div>
                <br/>{iPhone[id].detail}
            </div>]

    let [tf, setTf] = useState('');
    useEffect(() => {
        let a = setTimeout(() => { setTf('endTab') }, 90)
        return () => {
            clearTimeout(a)
            setTf('')
        }
    }, [tab])

    return(
        <div className={`startTab ${tf}`}>
            {content[tab]}
        </div>
        )
}


function About(){
    return(
        <div>
            <h4>회사 정보</h4>
            <button className="btn btn-danger" onClick={() => {window.location.href='/about/members'}}>회사 멤버</button>
            <Outlet></Outlet>
        </div>
    )
}

function Event(){
    return(
        
        <div className="container">
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>

    );
}

export {Products, About, Event};