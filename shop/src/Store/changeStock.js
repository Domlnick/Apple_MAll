import { createSlice } from '@reduxjs/toolkit'


let temp = []
let stock = createSlice({
    name : 'stock',
    initialState : temp,
    // 1. state 수정해주는 함수
    reducers : {
        addCount(state, action){
            let idx = state.findIndex((a) => { return a.id === action.payload })
            state[idx].stock++
        },
        pushCart(state, action){
            state.push(action.payload)
        }
    }
})
// 2. state 수정 함수 export
export let { addCount, pushCart } =  stock.actions

export default stock