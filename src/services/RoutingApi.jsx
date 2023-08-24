import httpRequest from "./Api";

// ------- membership
export const login = (data) => {
  return httpRequest.post("/login", data);
};
export const register = (data) => {
  return httpRequest.post("/registration", data);
};
export const profile = () => {
  return httpRequest.get("/profile");
};
export const profile_update = (data) => {
  return httpRequest.put(`/profile/update`, data);
};
export const profile_image = (data) => {
  return httpRequest.put(`/profile/image`, data);
};

// ------- information
export const banner = () => {
  return httpRequest.get("/banner");
};
export const services = () => {
  return httpRequest.get("/services");
};

// ------- transaction
export const balance = () => {
  return httpRequest.get("/balance");
};
export const topup = (data) => {
  return httpRequest.post("/topup", data);
};
export const transaction = (data) => {
  return httpRequest.post("/transaction", data);
};
export const history = () => {
  return httpRequest.get("/transaction/history");
};
