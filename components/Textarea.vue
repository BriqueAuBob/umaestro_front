<template>
  <div>
    <label :for="name">{{ label }}</label>
    <textarea
      :class="{
        'w-full h-32 p-4 mt-2 rounded-lg border border-neutral-800 focus:outline-none focus:border-neutral-700': true,
        'bg-neutral-900': disabled,
        'bg-neutral-800': !disabled,
        'cursor-block': disabled,
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      :id="name"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
  },
});
</script>
