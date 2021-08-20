const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5300/",
    uniqueName: "mf1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf1",
      library: { type: "var", name: "mf1" },
      filename: "remoteEntry.js",
      exposes: {
        './Mf1Module': './src/app/mf1/mf1.module.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
