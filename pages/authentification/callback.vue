<template>
  <div class="h-screen flex justify-center items-center text-xl font-bold">
    Authentification en cours...
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";

const config = useAppConfig();
const route = useRoute();
const code = route.query.code;
const { data, error } = await useFetch(`/auth/oauth2/discord/callback`, {
  baseURL: config.api.base_url,
  query: {
    code,
  },
});
if (error.value) {
  console.error("Error while fetching the user");
} else {
  const { token, user } = data.value;
  useAuthStore().login(token, user);

  onMounted(() => {
    document.cookie = `access_token=${token.token}; expires=${new Date(
      token.expires_at
    ).toUTCString()}; secure; path=/; SameSite=Lax; HttpOnly`;
  });
}
</script>
