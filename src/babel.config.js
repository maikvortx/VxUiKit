// babel.config.js

module.exports = function (api) {
  console.log('callsdadsa')
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["macros", "@babel/plugin-syntax-jsx"];

  return {
    presets,
    plugins
  };
}