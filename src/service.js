import axios from "axios";
import { API_ADDRESS_SERVICE } from "./env";

export function createProduct(product) {
  return axios.post(API_ADDRESS_SERVICE + "products", product);
}

export function uploadImage(img) {
  return axios.post(API_ADDRESS_SERVICE + "upload", img);
}

export function fetchProduct() {
  return axios.get(API_ADDRESS_SERVICE + "products");
}
