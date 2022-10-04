import datas from "../data.js";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";


function Products(props) {
    let {id} = useParams();
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');
    
    let products = props.iPhone.find(function(x){
        return x.id == id
    })

    useEffect(() => {
        if (isNaN(num) == true){
            window.alert('숫자만 입력해 주세요')
        }
    }, [num])
    
    
   
    

    return (
        <>
            <div className="container">
                {
                    alert == true
                    ? <div className="alert alert-warning">
                        3초 이내 구매시 5% 할인 이벤트
                    </div>
                    : null
                }
                
                <div className="row">
                    <div className='col-md-6'> 
                    
                    <img src= {process.env.PUBLIC_URL + '/image_src/iPhone' + (Number(id) + 1)+ '.png'} width= "100%" />
                        
                    </div>
                    <input onChange={(e) => {setNum(e.target.value)}}></input>
                    <div className="col-md-6">
                        <h4 className="pt-5">{products.title}</h4>
                        <p>{products.content}</p>
                        <p>{products.price}</p>
                        <button className="btn btn-danger">상품 주문</button>
                    </div>
                </div>

            </div>
        
        </>

    );
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