import { User } from './../../models/user.model';
import axios from 'axios';

export const signup = async (credentials: User) => {
  return await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
    username: credentials.username,
    email: credentials.email,
    password: credentials.password,
    confirmPassword: credentials.confirmPassword,
  });
};

export const signin = async (username: string, password: string) => {
  return await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signin`, {
    username,
    password,
  });
};

export const getCart = async () => {
  try {
    const cart = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/cart`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return cart;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const getProducts = async () => {
  console.log('getProducts query fxn');
  try {
    const products = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/product`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return products;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const addProductToCart = async (productId: string) => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/cart/${productId}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const placeOrder = async () => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/cart/place-order`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getImage = async (mediaId: string) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/media/${mediaId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const addProductToWishlist = async (productId: string) => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/wishlist/${productId}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const removeProductFromWishlist = async (productId: string) => {
  try {
    const data = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/wishlist/${productId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getWishList = async () => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/wishlist`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const checkout = async () => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/payment/make-payment`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    window.open(data.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
