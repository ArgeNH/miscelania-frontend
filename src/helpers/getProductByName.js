export const getProductByName = (name, products) => {
   return products?.filter(product => product.nameProduct === name);
}