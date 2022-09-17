import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//component
import Cart from '../shired/Cart';
import styles from './ShopCart.module.css';

//context
import { cartContext } from '../context/CartContext';

const ShopCart = () => {

    const {state , dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map( item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemsCounter > 0  &&
                <div className={styles.payments}>
                    <p><span>Total Items: </span>{state.itemsCounter}</p>
                    <p><span>Total Payment: </span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                    </div>
                        <button className={styles.clear} onClick={() => dispatch({type:"Checkout"})}>Check out</button>
                        <button className={styles.checkout} onClick={() => dispatch({type:"Clear"})}>Clear</button>
                </div>
            }

            {
                state.checkout &&
                 <div className={styles.complete}>
                    <h3>check out successfully</h3>
                    <Link to="/products">more buy</Link>
                 </div>
            }

           {
                !state.checkout && state.itemsCounter === 0 &&
                 <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to shop</Link>
                 </div>
           }

        </div>
    );
};

export default ShopCart;