import { createSlice } from '@reduxjs/toolkit'
import data from '../data.js'

let stock = createSlice({
    name : 'stock',
    initialState : data,
    // 1. state 수정해주는 함수
    reducers : {
        changeStockNo1(state){
            state[0].stock += 1
        },
        changeStockNo2(state){
            state[1].stock += 1
        },
        changeStockNo3(state){
            state[2].stock += 1
        }
    }
})
// 2. state 수정 함수 export
export let { changeStockNo1, changeStockNo2, changeStockNo3 } =  stock.actions

export default stock