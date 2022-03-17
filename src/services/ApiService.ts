/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosPromise, AxiosResponse } from "axios";

export interface IApiService {
  baseUrl: string;
  config: any;
  get: (path: string, extras?: any) => AxiosPromise<any>;
  post: (path: string, data?: any, extras?: any) => AxiosPromise<any>;
  fetch: (path: string, params?: any) => AxiosPromise<any>;
}

class ApiService implements IApiService {
  baseUrl: string;
  config: any;

  constructor(token = "") {
    this.baseUrl = "http://localhost:5000/api/";
  }

  get = (path: string, extras?: any) => {
    return axios.get(this.baseUrl + path);
  };

  post = (path: string, data?: any, extras?: any) => {
    const newConfig = extras
      ? { headers: { ...this.config.headers, ...extras.headers } }
      : this.config;
    return axios.post(this.baseUrl + path, data, newConfig as any);
  };

  fetch = (path: string, params = undefined) => {
    return axios.get(this.baseUrl + path, params);
  };
}

export default ApiService;
