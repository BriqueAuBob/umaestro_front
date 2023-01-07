module.exports = {
  apps: [
    {
      name: "umaestro_front",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      port: 3001,
    },
  ],
};
