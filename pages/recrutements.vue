<template>
  <div>
    <header class="flex flex-col gap-8 pt-48 pb-16 items-center">
      <h1 class="text-5xl font-black text-center">On recrute !</h1>
      <h2 class="text-lg font-medium text-center">
        Il se peut que ton profil nous intéresse, alors consulte nos offres!
      </h2>
    </header>
    <section class="container mx-auto gap-4 py-24">
      <NuxtLink
        v-for="recrutement in recrutements"
        :key="recrutement.id"
        to="https://docs.google.com/forms/d/e/1FAIpQLScCszcMFVbGvE5Y0bqNapkw1pcvm6fr7V_jvlVI48L87T81CA/viewform"
        target="_blank"
      >
        <div
          class="space-y-2 items-center gap-4 border-y-2 border-neutral-800 py-8 hover:bg-neutral-800 px-4 ease duration-300"
        >
          <h3 class="text-2xl font-bold">{{ recrutement.title }}</h3>
          <p class="text-lg font-medium">{{ recrutement.missions }}</p>
        </div>
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
const recrutements = [
  {
    title: "Modérateur",
    missions: "Modération sur nos projets et sur notre serveur Discord.",
  },
  {
    title: "Community Manager",
    missions: "Gestion de la communauté et de nos réseaux sociaux.",
  },
  {
    title: "Animateur",
    missions: "Création d'événements, d'animations...",
  },
  {
    title: "Graphiste",
    missions:
      "Création de logos, de bannières, illustrations, etc... (à préciser dans la candidature)",
  },
  {
    title: "Développeur Web Full-Stack",
    missions:
      "Développement d'APIs, de microservices et de sites web. (VueJS, NuxtJS, AdonisJS)",
  },
  {
    title: "Développeur Web Front-End",
    missions: "Développement de sites web. (VueJS, NuxtJS)",
  },
  {
    title: "Développeur Web Back-End",
    missions:
      "Développement d'APIs, de microservices et de sites web. (AdonisJS, MySQL)",
  },
  {
    title: "Développeur Bot Discord",
    missions: "Développement de bots Discord. (Discord.js, ShewenyJS, MongoDB)",
  },
];
</script>
