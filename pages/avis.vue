<template>
  <div>
    <header class="flex flex-col gap-8 pt-48 pb-16 items-center">
      <h1 class="text-5xl font-black text-center">Avis des utilisateurs</h1>
      <Button size="BIG" @click="toggleModal">Publier un avis</Button>
      <Modal
        :show="showModal"
        @close="showModal = false"
        title="Publier un avis"
      >
        <div>Combien d'étoiles souhaites-tu nous attribuer?</div>
        <div class="flex justify-between mt-3">
          <svg
            viewBox="0 0 21 20"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 cursor-pointer"
            v-for="i in 5"
            :key="i"
            @click="setStar(i)"
          >
            <path
              :fill="i <= stars ? 'gold' : '#9ca3af'"
              d="M20 8.09994C20.1 7.59994 19.7 6.99994 19.2 6.99994L13.5 6.19994L10.9 0.999938C10.8 0.799938 10.7 0.699938 10.5 0.599938C10 0.299938 9.4 0.499938 9.1 0.999938L6.6 6.19994L0.9 6.99994C0.6 6.99994 0.4 7.09994 0.3 7.29994C-0.1 7.69994 -0.1 8.29994 0.3 8.69994L4.4 12.6999L3.4 18.3999C3.4 18.5999 3.4 18.7999 3.5 18.9999C3.8 19.4999 4.4 19.6999 4.9 19.3999L10 16.6999L15.1 19.3999C15.2 19.4999 15.4 19.4999 15.6 19.4999C15.7 19.4999 15.7 19.4999 15.8 19.4999C16.3 19.3999 16.7 18.8999 16.6 18.2999L15.6 12.5999L19.7 8.59994C19.9 8.49994 20 8.29994 20 8.09994Z"
            ></path>
          </svg>
        </div>
        <Textarea
          v-model="message"
          class="mt-6"
          name="message"
          label="Message"
          placeholder="Entrez votre message..."
        />
        <span class="text-sm text-neutral-600"
          >Ton avis nous aidera à améliorer nos différents projets.</span
        >
        <Button size="MEDIUM" class="w-full mt-6" :dark="true">Envoyer</Button>
      </Modal>
    </header>
    <section class="container mx-auto grid lg:grid-cols-3 gap-4 py-24">
      <Testimonial
        v-for="(testimonial, index) of testimonials"
        :key="index"
        :testimonial="testimonial"
      />
    </section>
  </div>
</template>

<script setup>
const config = useAppConfig();
const { data } = await useAsyncData("testimonials", async () => {
  return await $fetch("/testimonials", {
    baseURL: config.api.base_url,
  });
});
const { testimonials } = data.value;

const showModal = ref(false);
const toggleModal = () => {
  showModal.value = !showModal.value;
};

const stars = ref(5);
const setStar = (i) => {
  stars.value = i;
};

const message = ref("");
</script>
