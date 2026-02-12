const glob = require("glob");

module.exports = {
  async redirects() {
    return [
      {
        source: "/:lang(cn|zh|de|es|fil|fr|id|it|ja|ko|nl|ru|vi)",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:lang(cn|zh|de|es|fil|fr|id|it|ja|ko|nl|ru|vi)/:page*",
        destination: "/en/:page*",
        permanent: true,
      },
    ];
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
