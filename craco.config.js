const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#F26522",
              "@text-color": "#00476F",
              "@font-size-base": "13px",
              // "@table-border-radius-base": "5px",
              // "@table-header-bg": "#fff",
              // "@table-header-color": "#808080",
              // "@table-row-hover-bg": "#fcf4d7",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
