import * as types from "./productActionTypes";
import { AxiosInstance } from "../../../api/AxiosInstance";

// Ürün listesini güncelleyen
export const setProductList = (productList) => ({
  type: types.SET_PRODUCT_LIST,
  payload: productList,
});

// Toplam ürün sayısını ayarlayan
export const setTotalProductCount = (total) => ({
  type: types.SET_TOTAL_PRODUCT_COUNT,
  payload: total,
});

// Sayfa sayısını ayarlayan
export const setPageCount = (count) => ({
  type: types.SET_PAGE_COUNT,
  payload: count,
});

// Aktif sayfayı ayarlayan
export const setActivePage = (page) => ({
  type: types.SET_ACTIVE_PAGE,
  payload: page,
});

// Veri alım durumunu ayarlayan
export const setFetchState = (fetchState) => ({
  type: types.SET_FETCH_STATE,
  payload: fetchState,
});

// Belirli bir kategoriye ait ürünleri getiren ve Redux mağazasına ekleyen
export const fetchProductsByCategory = (categoryCode, params = {}) => {
  return (dispatch, getState) => {
    AxiosInstance.get(`/products/category/${categoryCode}`, {
      params: params,
    })
      .then((response) => {
        if (params.offset) {
          // Eğer offset parametresi varsa, mevcut ürün listesini al
          const currentProductList = getState().product.productList;
          // Yeni ürün listesini al
          const newProductList = response.data.products;
          // Mevcut ürün listesi ile yeni ürün listesini birleştir
          const updatedProductList = [...currentProductList, ...newProductList];
          // Yeni ürün listesini güncelle
          dispatch(setProductList(updatedProductList));
        } else {
          // Eğer offset parametresi yoksa, ürün listesini sıfırla
          dispatch(setProductList(response.data.products));
          // Toplam ürün sayısını ayarla
          dispatch(setTotalProductCount(response.data.total));
          // Sayfa sayısını ayarla
          dispatch(setPageCount(response.data.pages));
          // Veri alım durumunu başarılı olarak işaretle
          dispatch(setFetchState("success"));
        }
      })
      .catch((err) => {
        // Hata durumunda konsola hata mesajını yazdır
        console.error(
          `Error fetching products for category ${categoryCode}:`,
          err
        );
        // Veri alım durumunu hata olarak işaretle
        dispatch(setFetchState("error"));
      });
  };
};
