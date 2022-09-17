import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten , isIncart, quantityCount } from '../helpers/functions';

//context
import { cartContext } from '../context/CartContext';

// Icon
import trashIcon from '../assets/icons/trash.svg';

import styles from './Product.module.css';



const Product = ({productData}) => {

    const{state ,dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product" style={{width:"250px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>

{quantityCount(state , productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"Remove_Item" , payload:productData})}><img src={trashIcon} alt="icon" style={{width:"20px"}} /></button>}

{quantityCount(state , productData.id) > 1  &&   <button className={styles.smallButton} onClick={() => dispatch({type:"Decrease" , payload:productData})}>-</button>}

{quantityCount(state , productData.id) > 0  && <span className={styles.counter}>{quantityCount(state , productData.id)}</span>}
                {
                    isIncart(state , productData.id) ? 
                    <button className={styles.smallButton} onClick={() => dispatch({type:"Increase" , payload: productData})}>+</button>
                    : <button onClick={() => dispatch({type:"Add_Item" , payload: productData})}>Add to cart</button>
                }

                
                </div>
            </div>
        </div>
    );
};

export default Product;