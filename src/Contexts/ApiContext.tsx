/* eslint-disable @typescript-eslint/naming-convention */
import { createContext } from "react";
import ApiService from "../services/ApiService";
import { IApiService } from "../services/ApiService";

interface IApiServiceContext {
  apiService: IApiService;
}

const ApiServiceContext = createContext<IApiServiceContext>({
  apiService: new ApiService()
});

export default ApiServiceContext;
