module.exports = {
  apps: [
    {
      name: "UMaestroFront",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      port: 3001,
    },
  ],
};
