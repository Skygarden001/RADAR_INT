const {override,  useBabelRc} = require("customize-cra");
module.exports = override(useBabelRc())
module.exports = {
    plugins: [
      {
        plugin: require("craco-cesium")()
      }
    ]
  };
