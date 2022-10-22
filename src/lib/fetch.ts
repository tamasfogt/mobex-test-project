import axios, { AxiosRequestConfig } from "axios";

import { BASE_URL } from "../constants/environment";

export function getFetch<Type>(
  url: string,
  params: any = {},
  baseURL = `${BASE_URL}/`
) {
  const config: AxiosRequestConfig = { baseURL, url, params };
  const api = axios.create(config);
  return api.get<Type>(url, { params });
}
