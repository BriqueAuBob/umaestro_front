<template>
  <NuxtLink
    :to="`https://discord.com/channels/977507903307145216/1011729746062737560/${id}`"
    target="_blank"
  >
    <div
      class="flex flex-col justify-between rounded-lg p-6 shadow-sm transition duration-200 ease-in hover:-translate-y-1 bg-neutral-900 hover:bg-neutral-800 border-2 border-neutral-800"
    >
      <div>
        <div class="flex items-center gap-4 font-semibold">
          <img class="h-8 w-8 rounded-full" :src="suggestion.author.icon_url" />
          {{ suggestion.author.name.replace("Suggestion de ", "") }}
        </div>
        <p class="mt-4">{{ suggestion.description }}</p>
      </div>
      <div class="flex gap-2">
        <div
          v-for="(reaction, index) of reactions"
          :key="index"
          class="mt-4 flex gap-1 rounded-md bg-opacity-50 px-2 py-1 bg-neutral-700"
        >
          {{ reaction.emoji.name }}
          {{ reaction.count }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  suggestion: {
    type: Object,
    required: true,
  },
  reactions: {
    type: Array,
    required: false,
    default: [],
  },
});
</script>
