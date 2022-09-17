import React, {useState,useEffect} from 'react';
import { getProducts } from '../services/api';

export const productsContext = React.createContext();

const ProductContext = (props) => {

    const [products , setProducts] = useState([]);

    useEffect( ()=>{

        const fetchApi = async () => {

            setProducts(await getProducts());
        }

        fetchApi();

    } , [])


    return (
        <div>
            <productsContext.Provider value={products}>

                {props.children}

            </productsContext.Provider>
        </div>
    );
};

export default ProductContext;