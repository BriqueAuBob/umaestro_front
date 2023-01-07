import Locomotive from "locomotive-scroll";

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.provide(
    "locomotive",
    new Locomotive({
      el: document.querySelector("#__nuxt") as HTMLElement,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      resetNativeScroll: false,
    })
  );

  nuxt.hook("page:finish", () => {
    const locomotive = nuxt.vueApp._context.provides.locomotive;
    locomotive.update();
    locomotive.scrollTo(0, {
      disableLerp: true,
      duration: 0,
    });
  });
});
