<template>
  <component
    :is="href ? NuxtLink : 'button'"
    :href="href"
    class="inline-block font-bold rounded-full transition ease-in-out duration-300"
    :class="{
      'text-sm py-2 px-4': size === 'SMALL',
      'text-base py-4 px-8': size === 'MEDIUM',
      'text-lg px-12 py-6': size === 'BIG',
      'bg-white hover:bg-gray-300 text-black': !dark,
      'bg-neutral-800 hover:bg-neutral-700 text-white': dark,
    }"
  >
    <slot />
  </component>
</template>

<script setup>
const NuxtLink = resolveComponent("NuxtLink");

defineProps({
  href: {
    type: String,
  },
  size: {
    type: String,
    default: "SMALL",
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>
