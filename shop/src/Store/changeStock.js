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
            console.log(action.payload)
        },
        pushCart(state, action){

            state.push(action.payload)    
            
        },
        minusOrDelete(state, action){
            let idx = state.findIndex((a) => { return a.id === action.payload })
            if(state[idx].stock == 0){
                state.pop(action.payload)
            }else{
                state[idx].stock--
            }
        }
    }
})

// 2. state 수정 함수 export
export let { addCount, pushCart, minusOrDelete } = stock.actions

export default stock