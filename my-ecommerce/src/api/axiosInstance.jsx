import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});
export default AxiosInstance;
/* Axios kütüphanesini kullanarak bir Axios örneği oluşturuyor ve bunu dışa aktarıyor.*/
