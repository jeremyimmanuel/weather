import { openWeatherUrl } from "./src/constants";

module.exports = {
  devServer: {
    proxy: openWeatherUrl,
  },
};
