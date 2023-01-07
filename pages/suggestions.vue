<template>
  <div>
    <header class="pt-48 pb-24 flex flex-col items-center">
      <h1
        class="text-center text-5xl font-extrabold text-black dark:text-white"
      >
        Suggestions de nos utilisateurs
      </h1>
      <Button class="mt-8" size="BIG" @click="toggleModal"
        >Publier une suggestion</Button
      >
      <Modal
        title="Publier une suggestion"
        :show="showModal"
        @close="showModal = false"
      >
        <Textarea
          name="message"
          label="Contenu de la suggestion"
          placeholder="Entrez votre message..."
        />
        <span class="text-neutral-600 text-sm">
          Ta suggestion sera envoyée dans le salon
          <a
            href="https://discord.com/channels/977507903307145216/1011729746062737560"
            target="_blank"
            class="rounded-md p-1 bg-neutral-800 text-neutral-500"
            >#suggestions</a
          >
          sur notre serveur Discord
        </span>
        <Button size="MEDIUM" dark class="w-full mt-6">Envoyer</Button>
      </Modal>
    </header>
    <div class="container mx-auto px-4 pt-24 pb-48 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-8">
        <Suggestion
          v-for="(suggestion, index) of suggestions"
          :suggestion="suggestion.embeds[0]"
          :reactions="suggestion.reactions"
          :id="suggestion.id"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useAppConfig();
const { data } = await useAsyncData("suggestions", async () => {
  return await $fetch("/suggestions", {
    baseURL: config.api.base_url,
  });
});
const { suggestions } = data.value;

const showModal = ref(false);
const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>
