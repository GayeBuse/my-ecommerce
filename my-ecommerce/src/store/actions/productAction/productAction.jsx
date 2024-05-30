import * as types from "./productActionTypes";
import { AxiosInstance } from "../../../api/axiosInstance";
import { FETCH_STATES } from "../../reducers/productReducer";

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
export const setProductsAction =
  (category = null, filter = null, sort = null, limit = null, offset = null) =>
  (dispatch) => {
    dispatch(setFetchState(FETCH_STATES.Fetching));
    AxiosInstance.get("/products", {
      params: {
        category: category,
        filter: filter,
        sort: sort,
        limit: limit,
        offset: offset,
      },
    })
      .then((res) => {
        dispatch(setProductList(res.data.products));
        dispatch(setPageCount(Math.ceil(res.data.total / 25)));
        dispatch(setTotalProductCount(res.data.products.length));
        dispatch(setFetchState(FETCH_STATES.Fetched));
      })
      .catch((err) => {
        console.log(err);
      });
  };
