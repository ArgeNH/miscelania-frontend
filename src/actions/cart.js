import { types } from '../types/types';

export const addNewProduct = (_id, code, nameProduct, total, cant, category, url, counter, price) => {
   return (dispatch, getState) => {
      const { products } = getState().cart;

      const exist = products.some(product => product.code === code);

      if (exist) {
         products.forEach(element => {
            if (element.code === code) {
               element.counter += counter;
               element.total += (counter * price)
            }
         })
      } else {
         dispatch(setProduct(_id, code, nameProduct, total, cant, category, url, counter, price));
      }
   }
}

export const setProduct = (_id, code, nameProduct, total, cant, category, url, counter, price) => ({
   type: types.cartSetProduct,
   payload: {
      _id,
      code,
      nameProduct,
      total,
      cant,
      category,
      url,
      counter,
      price
   }
})

export const removeProduct = (code) => ({
   type: types.cartRemoveProduct,
   payload: {
      code
   }
})

export const setCartEmpty = () => ({
   type: types.cartSetEmpty
})