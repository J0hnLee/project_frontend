const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");

const plugins = [
  [
    withLess,
    {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#00ccb4",
            "border-radius-base": "4px",
          },
        },
      },
    },
  ],
];

module.exports = withPlugins(plugins, {
  reactStrictMode: true,
});