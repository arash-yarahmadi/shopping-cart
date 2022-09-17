import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { cartContext } from '../context/CartContext';

//Icon
import shopIcon from '../assets/icons/shop.svg';
import styles from './Navbar.module.css'

const Navbar = () => {

    const {state} = useContext(cartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="shopIcon" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;