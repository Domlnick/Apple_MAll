import datas from "../data.js";
import { Outlet } from "react-router-dom";


function Pages() {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='col-md-6'> 
                        <img src= {process.env.PUBLIC_URL + "/image_src/iPhone1.png"} width= "100%"/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{datas[0].title}</h4>
                        <p>{datas[0].content}</p>
                        <p>{datas[0].price}</p>
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

export {Pages, About, Event};