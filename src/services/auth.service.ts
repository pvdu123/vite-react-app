import api from "../axios/axiosInstance";

export const login = async (username: string) => {
  try {
    const response = await api.post("/auth/login", { username });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response?.data || { message: "Server error" };
  }
};
export const logout = async () => {
  const response = await api.delete("/auth/logout");
  return response.data;
};