import { useMutation, useQuery } from '@tanstack/react-query';
import {
  addProductToCart,
  addProductToWishlist,
  getCart,
  getImage,
  getProducts,
  getWishList,
  placeOrder,
  removeProductFromWishlist,
  signin,
  signup,
} from './queryFns';
import { User } from '@/models/user.model';

export const useSignup = () => {
  return useMutation({
    mutationFn: (credentials: User) => signup(credentials),
  });
};

export const useGetCart = () => {
  return useQuery({ queryKey: ['cart'], queryFn: getCart });
};

export const useSignin = () => {
  return useMutation({
    mutationFn: (credentials: { username: string; password: string }) =>
      signin(credentials.username, credentials.password),
  });
};

export const useGetProducts = () => {
  return useQuery({ queryKey: ['products'], queryFn: getProducts });
};

export const useGetWishlist = () => {
  return useQuery({ queryKey: ['wishlist'], queryFn: getWishList });
};

export const useAddProductToCart = () => {
  return useMutation({
    mutationFn: (productId: string) => addProductToCart(productId),
  });
};

export const useAddProductToWishlist = () => {
  return useMutation({
    mutationFn: (productId: string) => addProductToWishlist(productId),
  });
};

export const useRemoveProductFromWishlist = () => {
  return useMutation({
    mutationFn: (productId: string) => removeProductFromWishlist(productId),
  });
};

export const usePlaceOrder = () => {
  return useMutation({
    mutationFn: () => placeOrder(),
  });
};

export const useGetImage = (mediaId: string) => {
  return useQuery({
    queryKey: ['media', mediaId],
    queryFn: () => getImage(mediaId),
  });
};
