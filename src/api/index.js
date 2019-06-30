import axios from "axios";
axios.defaults.baseURL  = "http://localhost:4000";

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export let getSliders = ()=>{
    //返回一个promise对象
  return axios.get("/sliders");
}

export let gethotbooks = ()=>{
  //返回一个热门图书逆序的倒数6个
  return axios.get("/hotBooks");
}

export let getallBooks = ()=>{
  return axios.get("/allBooks");
}
