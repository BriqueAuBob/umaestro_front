<template>
  <NuxtLink
    :to="social.link"
    target="_blank"
    class="border border-neutral-800 bg-opacity-50 bg-black backdrop-blur-lg rounded-xl p-8 transition ease-in duration-400 hover:bg-neutral-900 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="flex items-center gap-4 font-semibold text-lg">
      <img :src="`/img/${social.icon}`" class="w-8 h-8" />
      {{ social.name }}
    </div>
    <p class="mt-3 font-medium leading-relaxed text-justify tracking-wide">
      {{ social.description }}
    </p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  social: {
    type: Object,
    required: true,
  },
});
</script>
