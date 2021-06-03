import store from "../../../App/store"
import { itemDeletedFromCart } from "../CartSlice/CartSlice"

export const DeleteItem = (id:number):void=>{
store.dispatch(itemDeletedFromCart(id))
}