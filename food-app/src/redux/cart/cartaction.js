import { CartActionType } from "./cartactionType"

export const cartAddItem= (item) =>({
    type:CartActionType.CART_ADD_ITEM,
    payload: item,
});
export const cartRemoveItem= (item) =>({
    type: CartActionType.CART_REMOVE_ITEM,
    payload: item,
});
export const cartclearItem = (item) => ({
    type: CartActionType.CART_CLEAR_ITEM_FROM_CART,
    payload: item,
  });
