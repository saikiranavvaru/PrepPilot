import { API_BASE_URL } from "../../shared/api/config";
import { getToken } from "../../shared/lib/auth";

async function readJsonResponse(response, fallbackMessage) {
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || fallbackMessage);
  return data.data;
}

function authorizationHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getCurrentResume() {
  const response = await fetch(`${API_BASE_URL}/api/v1/resumes/me`, {
    headers: authorizationHeaders(),
  });
  return readJsonResponse(response, "Failed to load resume");
}

export async function uploadResume(file, summary) {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("summary", summary);

  const response = await fetch(`${API_BASE_URL}/api/v1/resumes/me`, {
    method: "POST",
    headers: authorizationHeaders(),
    body: formData,
  });
  return readJsonResponse(response, "Failed to upload resume");
}

export async function downloadCurrentResume() {
  const response = await fetch(`${API_BASE_URL}/api/v1/resumes/me/download`, {
    headers: authorizationHeaders(),
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Failed to download resume");
  }
  return response.blob();
}
