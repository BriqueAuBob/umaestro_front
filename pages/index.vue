<template>
  <div>
    <header class="text-center py-44 relative">
      <h1 class="font-black text-7xl">Occaecat aute magna sit</h1>
      <h2 class="font-medium text-4xl mt-6 max-w-4xl mx-auto">
        Quis duis ipsum tempor aliqua commodo labore est culpa ad sunt ex mollit
        non
      </h2>
      <Button class="mt-16 mx-auto" size="BIG">Voir nos projets</Button>
    </header>
    <section class="text-center py-16 relative">
      <div class="font-bold text-lg">Qui sommes-nous?</div>
      <p class="max-w-2xl text-lg mx-auto mt-4 leading-relaxed text-justify">
        Officia pariatur id quis nisi tempor ipsum incididunt minim dolore
        pariatur consequat in. Consequat aliquip laborum aliqua esse excepteur
        deserunt commodo ut et exercitation ipsum eiusmod reprehenderit
        deserunt. Exercitation enim pariatur dolor consectetur duis magna
        officia laboris velit eu eiusmod. Est id reprehenderit commodo velit
        nisi officia nostrud irure magna ipsum eu. Nostrud dolore minim cillum
        quis reprehenderit pariatur ipsum est dolore velit labore. Enim ea qui
        est est cupidatat ad deserunt sit occaecat pariatur ex laboris. Duis
        aliquip sunt quis anim ad mollit minim esse. Lorem Lorem exercitation eu
        id laboris dolore.
      </p>
    </section>
    <section class="py-16 relative" data-scroll-container>
      <div class="container mx-auto relative z-10">
        <div class="font-bold text-lg text-center mb-8">Nos projets</div>
        <Project
          class="my-8"
          image="meta_creation.png"
          name="Meta Creation"
          description="Cupidatat duis anim ex voluptate excepteur qui irure sit consectetur exercitation eu duis ea."
          data-scroll
          data-scroll-speed="-0.4"
        />
        <Project
          class="my-8"
          image="meta_creation.png"
          name="Meta Creation"
          description="Cupidatat duis anim ex voluptate excepteur qui irure sit consectetur exercitation eu duis ea."
          data-scroll
          data-scroll-speed="2"
        />
      </div>
      <img
        src="/img/gradient_projects.svg"
        class="absolute top-0 left-0 w-full mix-blend-color select-none"
      />
    </section>
    <section
      class="py-16 relative flex justify-center flex-col"
      data-scroll-container
    >
      <div class="font-bold text-lg text-center mb-8">
        Ce que les gens disent de nous
      </div>
      <div class="container mx-auto grid lg:grid-cols-3 gap-4">
        <Testimonial
          v-for="(testimonial, index) of testimonials"
          :key="index"
          :testimonial="testimonial"
          data-scroll
          :data-scroll-speed="0.75 * (index % 3)"
        />
      </div>
      <Button href="/avis" class="mx-auto mt-8" size="MEDIUM">
        Voir plus d'avis
      </Button>
    </section>
    <section class="pt-16 pb-32 relative">
      <div class="container mx-auto">
        <div class="font-bold text-lg text-center mb-8">Rejoins nous</div>
        <div class="grid lg:grid-cols-2 gap-4">
          <SocialCard
            v-for="(social, index) of socials"
            :key="index"
            :social="social"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useAppConfig();
const { data } = await useFetch("/testimonials?max=9", {
  baseURL: config.api.base_url,
});
const { testimonials } = data.value;

const socials = [
  {
    name: "Discord",
    description:
      "Rejoins notre communauté sur Discord! Nous y organisons des événements et des concours régulièrement et il y a pleins d'informations utiles!",
    icon: "discord.svg",
    link: "https://discord.gg/2qZ7Yj",
  },
  {
    name: "Twitter",
    description:
      "Suivez-nous sur Twitter pour être au courant de nos dernières actualités!",
    icon: "twitter.svg",
    link: "https://twitter.com/crea_meta",
  },
];
</script>
