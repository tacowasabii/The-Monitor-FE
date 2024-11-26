import { authApiDelete, authApiGet, authApiPost, authApiPut } from "./apiUtils";
import { Client, GetClientInfo } from "./types/clients";

export const getClients = async () => {
  return authApiGet<Client[]>("/clients");
};

export const postClient = async (data: FormData) => {
  return authApiPost("/clients", data);
};

export const getClientInfo = async (clientId: number) => {
  return authApiGet<GetClientInfo>("/clients/info", { clientId });
};

export const deleteClient = (clientId: number) => {
  return authApiDelete("/clients", {
    clientId,
  });
};

export const putClient = (clientId: number, data: FormData) => {
  return authApiPut(`/clients/update`, data, { clientId });
};