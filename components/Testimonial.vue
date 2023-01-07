<template>
  <div
    class="border border-gray-800 bg-opacity-50 bg-black backdrop-blur-lg rounded-xl p-8"
  >
    <div class="flex gap-4 items-center">
      <Avatar :src="testimonial.author.avatar" />
      <div class="flex flex-col gap-1">
        <div class="font-bold text-lg">{{ testimonial.author.username }}</div>
        <div class="flex gap-2">
          <img
            src="/img/star.svg"
            v-for="i in testimonial.star"
            :key="i"
            class="w-4 h-4"
          />
        </div>
      </div>
    </div>
    <p class="mt-4 text-justify">
      {{ testimonial.message }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
});
</script>
