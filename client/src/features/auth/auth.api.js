import { apiRequest } from "../../shared/api/api";

export function loginUser(credentials) {
  return apiRequest("/api/v1/auth/login", {
    method: "POST",
    body: credentials,
  });
}

export function registerUser(details) {
  return apiRequest("/api/v1/auth/register", {
    method: "POST",
    body: details,
  });
}
