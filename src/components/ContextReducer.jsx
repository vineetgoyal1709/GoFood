// import React, { createContext, useContext, useReducer } from 'react'

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "ADD":
//             return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size, img: action.img }]
//         case "REMOVE":
//             let newArr = [...state];
//             newArr.splice(action.index, 1)
//             return newArr;
//         case "UPDATE":
//             let arr = [...state];
//             arr.find((food, index) => {
//                 if (food.id === action.id) {
//                     console.log(food.qty, parseInt(action.qty), action.price + food.price)
//                     arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
//                 }
//             });
//             return arr;
//         case "DROP":
//             let emptyArr = [];
//             return emptyArr;
//         default:
//             console.log("Error in reducer");
//     }
// }

// export const CartProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, []);
//     return (
//         <CartDispatchContext.Provider value={dispatch}>
//             <CartStateContext.Provider value={state}>
//                 {children}
//             </CartStateContext.Provider>
//         </CartDispatchContext.Provider>
//     )

// }

// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);
import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {

        case "ADD":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    qty: action.qty,
                    size: action.size,
                    img: action.img
                }
            ];

        case "REMOVE":
            let newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;

        case "UPDATE":
            let arr = [...state];

            const index = arr.findIndex(
                (food) => food.id === action.id
            );

            if (index !== -1) {
                arr[index] = {
                    ...arr[index],
                    qty: arr[index].qty + parseInt(action.qty),
                    price: arr[index].price + action.price
                };
            }

            return arr;

        case "DROP":
            return [];

        default:
            console.log("Error in reducer");
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);