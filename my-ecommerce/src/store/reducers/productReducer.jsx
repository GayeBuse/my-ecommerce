export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  failed: "FAILED",
};
/* Fetch durumu" genellikle bir ağ isteğinin durumunu ifade eder*/
const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: FETCH_STATES.notFetched,
};
export function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
        fetchState: FETCH_STATES.fetched,
      };
    /*  Ürün listesini ayarlar ve fetch durumunu FETCH_STATES.fetched olarak günceller.*/
    case "SET_TOTAL_PRODUCT_COUNT":
      return {
        ...state,
        totalProductCount: action.payload,
      };
    /*  Toplam ürün sayısını ayarlar.*/
    case "SET_PAGE_COUNT":
      return {
        ...state,
        pageCount: action.payload,
      };
    case "SET_ACTIVE_PAGE":
      return { ...state, activePage: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
}
