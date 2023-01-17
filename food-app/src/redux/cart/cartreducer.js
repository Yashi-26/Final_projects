import { CartActionType } from "./cartactionType";
import { addItemToCart, removeItemFromCart } from "./cartutilis";

const INITAL_STATE={
    cartItems: []
};

const cartReducer =(state = INITAL_STATE,action) =>{
    switch (action.type){
        case CartActionType.CART_ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case CartActionType.CART_CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            ),
        };
        case CartActionType.CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;