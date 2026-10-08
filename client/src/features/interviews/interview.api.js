import { apiRequest } from "../../shared/api/api";

export async function getInterviewHistory() {
  const { data } = await apiRequest("/api/v1/interviews/history");
  return data.data || [];
}

export async function startInterview(payload) {
  const { data } = await apiRequest("/api/v1/interviews/start", {
    method: "POST",
    body: payload,
  });
  return data.data;
}

export async function submitInterviewAnswer(interviewId, payload) {
  const { data } = await apiRequest(`/api/v1/interviews/${interviewId}/answers`, {
    method: "POST",
    body: payload,
  });
  return data.data;
}

export async function completeInterview(interviewId) {
  const { data } = await apiRequest(`/api/v1/interviews/${interviewId}/complete`, {
    method: "POST",
    body: {},
  });
  return data.data;
}
