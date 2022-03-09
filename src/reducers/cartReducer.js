import { types } from "../types/types";

const initialState = {
   products: []
}

export const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.cartSetProduct:
         return {
            ...state,
            products: state.products.push([action.addItem])
         }

      case types.cartRemoveProduct:
         return {
            ...state,
            products: state.products.filter(product => product.code != action.code)
         }

      case types.cartSetEmpty:
         return {
            initialState
         }

      default:
         return state
   }
}