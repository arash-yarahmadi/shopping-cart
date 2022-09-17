import React,{useReducer} from 'react';


const initialState = {
    selectedItems :[],
    itemsCounter :0,
    total:0,
    checkout: false
}

const sumItems = items =>{

    const itemsCounter = items.reduce((total , product) => total + product.quantity , 0);

    const total = items.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
        
    
    return {itemsCounter , total};
    // return {itemsCounter: itemsCounter , total: total};

}

const cartReducer = (state,action) => {
    console.log(state);
    switch(action.type){
        case "Add_Item" :

            if(!state.selectedItems.find( item => item.id === action.payload.id)){

                state.selectedItems.push({
                    ...action.payload ,
                    quantity : 1,
                    
                })  
            }

            return {
                ...state,
                selectedItems : [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false,
            }

            case "Remove_Item" :
                const newSelectedItems = state.selectedItems.filter( item => item.id !== action.payload.id);

                return {
                    ...state,
                    selectedItems : [...newSelectedItems],
                    ...sumItems(newSelectedItems)
                }

            case "Increase" :
                const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems[indexI].quantity++ ;
    
                return {
                    ...state,
                    ...sumItems(state.selectedItems)
                }

            case "Decrease" :
                const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems[indexD].quantity-- ;

                return {
                     ...state,
                     ...sumItems(state.selectedItems)
                }

            case "Checkout" :
                return{
                    selectedItems :[],
                    itemsCounter :0,
                    total:0,
                    checkout:true,
                }

            case "Clear" :
                return{
                    selectedItems :[],
                    itemsCounter :0,
                    total:0,
                    checkout:false,
            }

            default :
                return state;
        
            
    }
}

export const cartContext = React.createContext();


const CartContext = ({children}) => {

    const [state,dispatch] = useReducer(cartReducer,initialState);

    return (
        <cartContext.Provider value={{state: state , dispatch: dispatch}}>

            {children}

        </cartContext.Provider>
    );
};

export default CartContext;