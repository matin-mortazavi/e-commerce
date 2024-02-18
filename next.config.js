const path = require("path");

module.exports = {
  // output: "export",
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: process.env.NEXT_PUBLIC_HOSTNAME,
  //       port: "",
  //     },
  //   ],
  // },

  sassOptions: {
    includePaths: [path.join(__dirname, "assets/styles")],
    prependData: `
    @import "./global.scss";
    `,
  },
};
