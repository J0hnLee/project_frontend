/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// next.config.js
/* eslint-disable */
// const withPlugins = require("next-compose-plugins");
// const withAntdLess = require("next-plugin-antd-less");

// const pluginAntdLess = withAntdLess({
//   // modifyVars: {
//   //   '@THEME--DARK': 'theme-dark',
//   // },
//   modifyVars: { "@primary-color": "#04f" }, // optional
//   lessVarsFilePath: "./src/styles/variables.less", // optional
//   lessVarsFilePathAppendToEndOfContent: false, // optional
//   // cssLoaderOptions: {
//   cssLoaderOptions: {
//     // ...
//     mode: "local",
//     //localIdentName: __DEV__ ? "[local]--[hash:base64:4]" : "[hash:base64:8]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
//     exportLocalsConvention: "camelCase",
//     exportOnlyLocals: false,
//     // ...
//     getLocalIdent: (context, localIdentName, localName, options) => {
//       return "whatever_random_class_name";
//     },
//   },
//   // for Next.js ONLY
//   nextjs: {
//     localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
//   },

//   // Other Config Here...

//   webpack(config) {
//     return config;
//   },
//   // esModule: false,
//   // sourceMap: false,
//   // modules: {
//   // mode: 'local',
//   // localIdentName: '[hash:2]',
//   // },
//   // },
// });

// module.exports = withPlugins([[pluginAntdLess]], {
//   webpack(config) {
//     return config;
//   },
//   // images: {
//   //   disableStaticImages: true,
//   // },
//   // NextFuture
//   // future: {
//   //   webpack5: true,
//   // },
// });
