<template>
  <div class="relative pb-8">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import { useAuthStore } from "~~/store/auth";
const config = useAppConfig();
const route = useRoute();
const code = route.query.code;
const cookie = useCookie("access_token", {
  maxAge: 60 * 60 * 24 * 7,
});
onMounted(async () => {
  if (!code) return;
  const { token, user } = await fetch(
    `${config.api.base_url}auth/user/code?code=${code}`
  ).then((res) => res.json());

  if (!token) return;
  useAuthStore().login(token, user);

  cookie.value = token.token;
});
</script>
