<template>
  <div class="relative rounded-lg">
    <img
      :src="`/img/${image}`"
      class="w-full h-full min-h-[400px] object-cover select-none rounded-2xl"
    />
    <div
      class="bg-gradient-to-b from-transparent to-black opacity-50 absolute top-0 left-0 w-full h-full rounded-2xl"
    />
    <div class="absolute bottom-0 w-full p-16">
      <div class="text-2xl font-bold">{{ name }}</div>
      <div v-if="description" class="text-lg font-medium mt-2">
        {{ description }}
      </div>
      <Button href="/projects/meta_creation" class="mt-5" size="MEDIUM">
        Voir le projet
      </Button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});
</script>
