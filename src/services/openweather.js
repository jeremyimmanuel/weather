import { openWeatherApiKey, openWeatherUrl } from "@/constants";
import axios from "axios";

// ENDPOINTS
const weatherDataEndpoint = "/data/2.5/weather";

function OpenWeather() {
  this.appid = openWeatherApiKey;
}

/**
 * Fetch current weather data based off city name
 *
 * @param {String} city
 * @param {String} units
 * @returns {fetchCurrentWeatherResponse}
 */
OpenWeather.prototype.fetchCurrentWeather = async function (
  city,
  units = "imperial"
) {
  const params = {
    q: city,
    appid: this.appid,
    units,
  };
  const { data } = await axios.get(weatherDataEndpoint, {
    params,
  });
  return data;
};

/**
 * Gets the weather icon url to be used to show weather image
 *
 * @param {String} iconId
 * @returns {String}
 */
OpenWeather.prototype.weatherIconUrl = function (iconId) {
  const iconUrl = new URL(`img/w/${iconId}.png`, openWeatherUrl);
  return iconUrl.toString();
};

export default new OpenWeather();
