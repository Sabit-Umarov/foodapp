const path = require("path");
const vueSrc = "./src";
module.exports = {
  runtimeCompiler: true,
  lintOnSave: true,

  css: {
    requireModuleExtension: true,
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },

  transpileDependencies: ["vuetify"],
};
