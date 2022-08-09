/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: ['lh3.googleusercontent.com'],
  // }
};

module.exports = nextConfig;

//const withLess = require("next-with-less");

// next.config.js
// const withLess = require("next-with-less");

// module.exports = withLess({
//   lessLoaderOptions: {
//     lessOptions: {
//       modifyVars: {
//         "@primary-color": "#f74a49",
//         "@border-radius-base": ".5em",
//       },
//     },
//   },
// });
