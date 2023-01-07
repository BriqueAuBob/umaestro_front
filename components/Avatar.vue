<template>
  <div>
    <ClientOnly>
      <img v-if="!error" class="h-12 avatar" :src="src" @error="onError" />
    </ClientOnly>
    <div v-if="error" class="flex justify-center items-center">
      <img src="/img/default_avatar.jpg" class="w-12 h-12 avatar" />
    </div>
  </div>
</template>

<script setup>
const error = ref(false);

defineProps({
  src: {
    type: String,
    required: true,
  },
});

function onError() {
  error.value = true;
}
</script>
