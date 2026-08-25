import axios from "axios";

export async function getProducts() {
  try {
    const res = await axios.get("http://localhost:4000/api/products");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProduct(id,productData) {
  try {
    const res = await axios.patch(`http://localhost:4000/api/products/${id}`, {
      ...productData,
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProduct(id) {
  try {
    const res = await axios.get(`http://localhost:4000/api/products/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(id) {
  try {
    const res = await axios.delete(`http://localhost:4000/api/products/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

