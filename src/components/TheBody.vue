<template>
  <div class="h-screen bg-indigo-200 flex flex-col justify-start items-center">
    <input
      v-model="city"
      type="text"
      class="rounded-md h-8 pl-2 focus:outline-none"
      @keyup.enter="fetchCurrentWeather"
    />
    <h1>The weather looks nice today!</h1>
    {{ weatherCondition }}
    <img
      v-if="weatherIconUrl"
      class="h-24 w-24"
      :src="weatherIconUrl"
      alt="weather icon"
    />
    <div v-if="timestamp">{{ cityDate }}</div>
    <div
      v-if="temperature"
      class="font-sans font-bold drop-shadow-xl text-8xl bg-white bg-opacity-50 p-4 rounded-md"
    >
      {{ temperature }}&deg;F
    </div>
    <div v-if="error" class="text-red-600">{{ error }}</div>
  </div>
</template>

<script>
import OpenWeather from "@/services/openweather";

export default {
  name: "TheBody",

  data() {
    return {
      weatherCondition: "",
      weatherIcon: "",
      temperature: "",
      city: "",
      timestamp: 0,
      error: "",
    };
  },

  methods: {
    async fetchCurrentWeather() {
      this.error = "";
      this.weatherCondition = "";
      this.weatherIcon = "";
      this.temperature = "";
      this.timestamp = 0;
      try {
        const data = await OpenWeather.fetchCurrentWeather(this.city);

        this.weatherCondition = data.weather[0].description;
        this.weatherIcon = data.weather[0].icon;
        this.temperature = data.main.temp;

        const dateObj = new Date();
        const currentTime = dateObj.getTime();
        this.timestamp = currentTime + data.timezone;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },

  computed: {
    weatherIconUrl() {
      if (this.weatherIcon) return OpenWeather.weatherIconUrl(this.weatherIcon);
      return "";
    },

    cityDate() {
      console.log("timestamp", this.timestamp);
      const localTime = new Date(this.timestamp);
      console.log(localTime.toLocaleString())
      return localTime.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>
