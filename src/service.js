import axios from "axios";
import { API_ADDRESS_SERVICE } from "./env";

var JWT = undefined;
export async function userInfo() {
  JWT =
    window.localStorage.getItem("userInfo") ||
    window.sessionStorage.getItem("userInfo");
  JWT = JSON.parse(JWT);
}
userInfo();

export async function createProduct(product) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.post(API_ADDRESS_SERVICE + "products", product, headers);
}

export async function uploadImage(img) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.post(API_ADDRESS_SERVICE + "upload", img, headers);
}

export async function fetchProduct() {
  return await axios.get(API_ADDRESS_SERVICE + "products");
}

export async function register(userInfo) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.post(API_ADDRESS_SERVICE + "auth/register", userInfo, headers);
}

export async function login(userInfo) {
  return axios.post(API_ADDRESS_SERVICE + "auth/login", userInfo);
}
export async function fetchOrder() {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.get(API_ADDRESS_SERVICE + "payment", headers);
}
export async function orderById(id) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.get(API_ADDRESS_SERVICE + "orderDetail/" + id, headers);
}
export async function orderEdit(id, orderEdited) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.put(
    API_ADDRESS_SERVICE + "orderDetail/" + id,
    orderEdited,
    headers
  );
}
export async function deleteOrder(id) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.delete(API_ADDRESS_SERVICE + "orderDetail/" + id, headers);
}
export async function fetchProductById(id) {
  return axios.get(API_ADDRESS_SERVICE + "products/" + id);
}
export async function deleteProduct(id) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.delete(API_ADDRESS_SERVICE + "products/" + id, headers);
}
export async function EditProduct(id, product) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.put(API_ADDRESS_SERVICE + "products/" + id, product, headers);
}
export async function createCategories(category) {
  return axios.post(API_ADDRESS_SERVICE + "categories", category);
}

export async function fetchCategories() {
  return axios.get(API_ADDRESS_SERVICE + "categories");
}
export async function fetchUserInfo(username) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.get(API_ADDRESS_SERVICE + "userInfo/" + username, headers);
}
export async function uploadUserImg(img) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.post(API_ADDRESS_SERVICE + "upload/userImage", img, headers);
}
export async function editProfile(newUserInfo) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.post(
    API_ADDRESS_SERVICE + "userInfo/editProfile",
    newUserInfo,
    headers
  );
}
export async function changePassword(newPassword) {
  await userInfo();

  var headers = JWT
    ? {
        headers: {
          Authorization: "Bearer " + JWT.token,
        },
      }
    : undefined;
  return axios.post(
    API_ADDRESS_SERVICE + "changePassword",
    newPassword,
    headers
  );
}
