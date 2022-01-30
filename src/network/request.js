import axios from "axios"
export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000
  });
  instance.interceptors.request.use((config) => {
    return config
  }, err => {
    return err
  });
  //处理数据
  instance.interceptors.response.use((config) => {
    return config.data
  }, err => {
    return err
  });
  return instance(config);
}