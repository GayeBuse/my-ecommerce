import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});
export default axiosInstance;
/* Axios kütüphanesini kullanarak bir Axios örneği oluşturuyor ve bunu dışa aktarıyor.*/
