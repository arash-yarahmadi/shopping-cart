import React,{useContext} from 'react';

//context
import { cartContext } from '../context/CartContext';

//function
import { shorten } from '../helpers/functions';

//Icon
import trashIcon from '../assets/icons/trash.svg';

import styles from './Cart.module.css';

const Cart = (props) => {

    const {image,price,title,quantity} = props.data;

    const {dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} style={{width:"100px"}} alt="product" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1  ?
                    <button onClick={() => dispatch({type:"Decrease" , payload: props.data})}>-</button>
                    : <button onClick={() => dispatch({type:"Remove_Item" , payload: props.data})}><img src={trashIcon} style={{width:"20px"}} alt="trash" /></button>
                }

                <button onClick={() => dispatch({type: "Increase" , payload: props.data})}>+</button>

              

            </div>
        </div>
    );
};

export default Cart;