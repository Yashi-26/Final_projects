import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartAddItem ,cartRemoveItem} from '../../../../redux/cart/cartaction';
import { selectCartItems, selectCartItemsCount } from '../../../../redux/cart/cartselector';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './styles.css';


const MenuItems = ({item,cartCount,cartList,cartAddItem,cartRemoveItem}) => {
    const {id,name,info,price,img} =item;
    const handleItemQuantity=()=>{
      let quantity=0;
      if(cartCount !== 0){
        const findItemInCart = cartList.find((item)=>item.id === id)
        if(findItemInCart){
          quantity = findItemInCart.quantity;
        }
      }
      return quantity;
    }; 
  return (
    <div className='item'>
        <img src ={img} alt='item'/>
        <div className="item-head_desc">
            <p className="head_desc-name">{name}</p>
            <p className="head_desc-info">
              <small>{info}</small></p>
        </div>
        <div className="item-food_desc">
            <span className="food_desc-price"> $ {price}</span>
            <ButtonAddRemoveItem 
            quantity={handleItemQuantity()} 
            handleAddItem={()=> cartAddItem(item)}
            handleRemoveItem={()=> cartRemoveItem(item)}/>
        </div>
        
    </div>
  );
};
const mapStateToProps =createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});
const mapDispatchToProps=(dispatch)=>({
  cartAddItem:(item)=>dispatch(cartAddItem(item)),
  cartRemoveItem:(item)=>dispatch(cartRemoveItem(item)),

})



export default connect(mapStateToProps,mapDispatchToProps)(MenuItems);