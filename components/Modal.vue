<template>
  <div>
    <transition name="fade">
      <div
        class="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-md"
        v-if="show"
      >
        <div
          class="absolute w-full h-full bg-black bg-opacity-75"
          @click="close"
        ></div>
        <div
          class="bg-neutral-900 p-8 rounded-2xl shadow-xl min-w-[75%] lg:min-w-[400px] max-w-[550px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div class="flex justify-between items-center mb-4" v-if="title">
            <h1 class="text-xl font-semibold">{{ title }}</h1>
            <button class="text-2xl font-bold" @click="close">
              <img class="w-7 h-7" src="/img/cross.svg" />
            </button>
          </div>
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(["close"]);
const close = () => emit("close");
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active div:nth-child(2),
.fade-leave-active div:nth-child(2) {
  transition: all 0.4s cubic-bezier(0.15, 0, 0.333, 1);
}

.fade-enter-from div:nth-child(2),
.fade-leave-to div:nth-child(2) {
  transform: translate(-50%, -50%) scale(0.5);
  transform-origin: center;
}
</style>
