import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux'
import { changeStockNo1, changeStockNo2, changeStockNo3 } from '../Store/changeStock.js';

function Cart() {
    
    let a = useSelector((state) => { return state })
    let dispatch = useDispatch()
    let total = 0;
    let count = 0;

    a.stock.map((b, i) => {
        count += a.stock[i].stock
        total += a.stock[i].stock * a.stock[i].price
    })

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>금액</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        a.stock.map((b, i) => 
                            <tr key ={i}>
                                <td>{a.stock[i].id + 1}</td>
                                <td>{a.stock[i].title}</td>
                                <td>{a.stock[i].stock}</td>
                                <td>{a.stock[i].stock * a.stock[i].price} 달러</td>
                                <td>
                                    <button onClick={() => {
                                        if(i == 0){
                                            dispatch(changeStockNo1())
                                        }else if(i == 1){
                                            dispatch(changeStockNo2())
                                        }else {
                                            dispatch(changeStockNo3())
                                        }
                                        
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                     <tr>
                        <td colSpan="3">총개수 : {count}</td>
                        <td>총 금액 : {total} 달러</td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;