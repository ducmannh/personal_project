import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

interface AuthState {
    accessToken: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    refreshToken: () => Promise<string | null>;
}

const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,

    login: async (username, password) => {
        try {
            const response = await axiosInstance.post("/AuthApi/login", {
                username,
                password,
            });

            if (response.data?.accessToken && response.data?.refreshToken) {
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                set({ accessToken: response.data.accessToken });
            } else {
                throw new Error("Invalid response from server");
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 401) {
                    throw new Error("Sai tên đăng nhập hoặc mật khẩu!");
                } else {
                    throw new Error("Có lỗi xảy ra, vui lòng thử lại!");
                }
            } else {
                throw new Error("Lỗi không xác định!");
            }
        }
    },

    logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        set({ accessToken: null });
    },

    refreshToken: async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) {
                set({ accessToken: null });
                return null;
            }

            const response = await axiosInstance.post("/AuthApi/refresh-token", {
                refreshToken,
            });

            if (response.data?.accessToken && response.data?.refreshToken) {
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                set({ accessToken: response.data.accessToken });
                return response.data.accessToken;
            }

            throw new Error("Invalid response from refresh token endpoint");

        } catch (error) {
            console.error("Làm mới token thất bại, cần đăng nhập lại!", error);
        }
    },
}));

export default useAuthStore;