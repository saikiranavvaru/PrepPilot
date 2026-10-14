import { apiRequest } from "../../shared/api/api";

export async function getDashboard() {
  const { data } = await apiRequest("/api/v1/dashboard");
  return data.data;
}
