<template>
  <div class="h-screen bg-indigo-200">
    <h1>The weather looks nice today!</h1>
    {{ weatherCondition }}
    <img id="wicon" :src="weatherIconUrl" alt="weather icon">
  </div>
</template>

<script>
import axios from "axios";
import { openWeatherApiKey } from "@/constants";

export default {
  name: "TheBody",

  data() {
    return {
      weatherCondition: "",
      weatherIcon: "",
    };
  },

  async created() {
    const appid = openWeatherApiKey;
    // const url = `/data/2.5/weather?q=Seattle&appid=${appid}`;
    const url = "/data/2.5/weather";
    const params = {
      q: "Seattle",
      appid,
    };
    const obj = await axios.get(url, {
      params,
    });

    console.log("res", obj.data);
    this.weatherCondition = obj.data.weather[0].description;
    this.weatherIcon = obj.data.weather[0].icon;
  },

  computed: {
    weatherIconUrl () {
      if (this.weatherIcon)
        return `http://api.openweathermap.org/img/w/${this.weatherIcon}.png`;
      return "";
    }
  }
};
</script>
