// AxiosInstance.jsx

import axios from "axios";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");
  /*localStorage'dan bir token alır ve buna bağlı olarak bir Axios örneği oluşturur. Eğer localStorage'da bir token varsa, bu token ile yetkilendirme başlığı içeren bir Axios örneği oluşturulur. Eğer token yoksa, yetkilendirme başlığı içermeyen bir Axios örneği oluşturulur.*/
  return token
    ? axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com/",
        headers: {
          Authorization: token,
        },
      })
    : axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com/",
        headers: {},
      });
};

export let AxiosInstance = createAxiosInstance();

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};
/*renewAxiosInstance işlevi, mevcut Axios örneğini yeniler. Bu, tokenin değişmesi durumunda veya kullanıcı oturumu başlatıldığında veya sonlandırıldığında Axios örneğini güncellemek için kullanılabilir. Özellikle, localStorage'daki token değiştiğinde veya oturum başlatma veya sonlandırma işlemlerinde, Axios örneğinin güncellenmesi gerekebilir. Bu durumda, renewAxiosInstance işlevi çağrılarak mevcut Axios örneği yenilenir ve yeni token veya oturum durumuna göre Axios örneği güncellenir.*/
