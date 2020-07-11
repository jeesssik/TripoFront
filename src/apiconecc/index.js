import axios from "axios";
import { AsyncStorage } from "react-native";

//base_URL para una instancia de axios pasarle URL relativas
const B_URL = "https://damp-waters-55481.herokuapp.com/api";//CAMBIAR A TRIPOBACK HEROKU

const DEBUG = true; // Muestra los logs de las peticiones si esta en true

//Creamos una instancia de axios con un custom config
const api = axios.create({
  baseURL: B_URL,
  headers: {
        'X-Custom-Header':'foobar' //son los custom headers que se envian 
  }
});




function getUrl(config) {
  if (config.baseURL) {
    return config.url.replace(config.baseURL, "");
  }
  return config.url;
}

// Intercepta todos los req 
api.interceptors.request.use(
  async (config) => {
    DEBUG && console.log(`${config.method.toUpperCase()} - ${getUrl(config)}:`);
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.authorization = token;
    }
    console.log(config);
    return config;
  },
  (error) => {
    console.log("ERROR: ", error);
    return Promise.reject(error);
  }
);

// Interceptor para los res 
api.interceptors.response.use(
  async (response) => {
    DEBUG &&
      console.log(
        `${response.status} - ${getUrl(response.config)}:`,
        response.data
      );
    return response;
  },(error) => {
    DEBUG &&
      console.log(
        `${error.response.status} - ${getUrl(error.response.config)}:`,
        error.response
      );
    return Promise.reject(error);
  }
);

export default api;