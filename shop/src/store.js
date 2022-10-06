import { configureStore} from '@reduxjs/toolkit'
import stock from './Store/changeStock.js'

export default configureStore({
    reducer : {
        stock : stock.reducer
    }
})