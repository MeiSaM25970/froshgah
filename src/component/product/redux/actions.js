export const REMOVE_PRODUCT = "[PRODUCT] REMOVE_PRODUCT";
export const ADD_PRODUCT = "[PRODUCT] ADD_PRODUCT";
export function removeProduct(product) {
  return { type: REMOVE_PRODUCT, payload: product };
}
export function addProduct(product) {
  return { type: ADD_PRODUCT, payload: product };
}
