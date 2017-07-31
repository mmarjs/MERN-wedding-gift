const VIEW_PRODUCT = 'product/VIEW';

export const viewProduct = (product) => {
  console.log(product.id);
    return {
        type: VIEW_PRODUCT,
        payload: product
    }
};
