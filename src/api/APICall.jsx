import axios from "axios";

import { ComplaintsUrl, LoginUrl, RegisteredUrl, SocietyFlatsUrl, } from "./URL";



const postAPI = async (url, body) => {
  const resp = await axios.post(url, body);
  // console.log("resp", resp);
  return resp.data;
};

export const RegisteredApi = (payload) => postAPI(RegisteredUrl, payload);
export const LoginApi = (payload) => postAPI(LoginUrl, payload);
export const SocietyFlatsApi=(payload)=> postAPI(SocietyFlatsUrl,payload);
export const ComplaintsApi=(payload)=> postAPI(ComplaintsUrl,payload);


