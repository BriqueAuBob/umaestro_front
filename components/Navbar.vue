<template>
  <nav
    class="absolute py-8 flex px-16 w-full items-center justify-between z-10"
  >
    <div class="flex items-center gap-4">
      <img class="w-8" src="/img/logo.svg" alt="UMaestro Logo" />
      <a href="/" class="font-bold text-2xl">umaestro.fr</a>
    </div>
    <button class="p-4" @click="menu = !menu">
      <img class="w-6" src="/img/menu.svg" alt="Menu" />
    </button>
    <div
      class="w-screen h-screen fixed left-0 top-0 px-16 py-8 flex flex-col justify-between ease-in duration-300 before:content[''] before:bg-black before:w-0 before:h-0 before:absolute before:right-0 before:top-0 before:-z-10 before:rounded-full before:ease before:duration-1000 before:overflow-hidden"
      :class="{
        'pointer-events-none': !menu,
        'before:w-[400vw]': menu,
        'before:h-[400vh]': menu,
        'before:right-[-50%]': menu,
        'before:top-[-50%]': menu,
        menu_closed: !menu,
      }"
      id="menu_items"
    >
      <div>
        <div class="flex items-center justify-between mb-12">
          <div class="flex items-center gap-4">
            <img class="w-8" src="/img/logo.svg" alt="UMaestro Logo" />
            <a href="/" class="font-bold text-2xl">umaestro.fr</a>
          </div>
          <button class="p-4" @click="menu = !menu">
            <img class="w-6" src="/img/menu.svg" alt="Menu" />
          </button>
        </div>
        <ul
          class="space-y-4 lg:space-y-6"
          :class="{ 'opacity-0': !menu, 'opacity-100': menu }"
        >
          <li v-for="element in elements" :key="element.name">
            <a :href="element.link" class="font-bold text-2xl lg:text-4xl">{{
              element.name
            }}</a>
          </li>
          <li>
            <ClientOnly>
              <Button v-if="!isLoggedIn" size="MEDIUM" @click="login"
                >Accéder à mon compte</Button
              >
              <div
                class="cursor-pointer flex items-center border-2 rounded-full py-3 pl-3 pr-8 w-fit text-lg font-semibold group relative ease duration-200 before:-z-10 before:opacity-0 before:w-0 before:h-full before:content[''] before:absolute hover:before:w-full hover:before:opacity-100 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-0 before:group-hover:scale-150 before:ease before:duration-200 text-white hover:text-black"
                v-else
              >
                <img
                  class="w-9 h-9 rounded-full mr-3 group-hover:scale-150 ease duration-200 group-hover:mr-5"
                  :src="user.avatar"
                />
                {{ user.username }}
              </div>
            </ClientOnly>
          </li>
        </ul>
      </div>
      <div class="mt-8" :class="{ 'opacity-0': !menu, 'opacity-100': menu }">
        <div class="text-2xl font-bold mb-4 hidden md:block">Nos projets</div>
        <div class="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-8">
          <Project
            name="makebetter.app"
            image="makebetter.png"
            href="https://makebetter.app"
          />
          <Project
            name="Meta Creation"
            image="meta_creation.png"
            href="https://discord.gg/dqpkacEUrM"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "~~/store/auth";
import { storeToRefs } from "pinia";

const elements = [
  {
    name: "Accueil",
    link: "/",
    icon: "home",
  },
  {
    name: "Recrutement",
    link: "/recrutements",
    icon: "info",
  },
  {
    name: "Suggestions",
    link: "/suggestions",
    icon: "phone",
  },
];
const menu = ref(false);
watch(menu, () => {
  const locomotive = useNuxtApp().vueApp._context.provides.locomotive;
  if (menu.value) {
    locomotive.stop();
  } else {
    locomotive.start();
  }
});

const config = useAppConfig();
const login = async () => {
  window.location.href =
    "https://auth.umaestro.fr?redirect_uri=" +
    encodeURIComponent(window.location.href);
};

const { user, isLoggedIn } = storeToRefs(useAuthStore());
const cookie = useCookie("access_token");
if (!user.value && cookie.value) {
  useAuthStore().getUser(cookie.value);
}
</script>
