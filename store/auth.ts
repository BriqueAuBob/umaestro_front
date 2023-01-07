import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.user;
    },
  },
  actions: {
    async getUser(token: string) {
      const baseURL = useAppConfig().api.base_url;
      const { user } = (await $fetch("/auth/user", {
        baseURL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })) as any;
      this.user = user;
    },
    login(token: any, user: any) {
      this.user = user;
    },
  },
});
