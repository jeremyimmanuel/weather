<template>
  <div
    class="h-screen flex flex-col justify-start items-center"
    :class="{
      'bg-gradient-to-tr': true,
      'from-pink-500': true,
      'via-red-500': true,
      'to-yellow-400': true,
    }"
  >
    <div class="text-4xl font-sans">How's the weather today?</div>
    <input
      v-model="city"
      type="text"
      class="rounded-md border-gray-400 border-2 h-12 w-64 pl-2 focus:outline-none mt-2"
      placeholder="Type in a city or place"
      @keyup.enter="fetchCurrentWeather"
    />
    {{ weatherCondition }}
    <img
      v-if="weatherIconUrl"
      class="h-24 w-24"
      :src="weatherIconUrl"
      alt="weather icon"
    />
    <weather-icon v-if="weatherDesc" :condition="weatherDesc" />
    <div v-if="timestamp" class="text-4xl mb-4">{{ cityDate }}</div>
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
import WeatherIcon from "@/components/WeatherIcon.vue";

export default {
  name: "TheBody",

  data() {
    return {
      weatherCondition: "",
      weatherIcon: "",
      weatherDesc: "",
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

        this.weatherCondition = data.weather[0].main;
        this.weatherDesc = data.weather[0].description;
        this.weatherIcon = data.weather[0].icon;
        this.temperature = data.main.temp;

        const dateObj = new Date();
        const currentTime = dateObj.getTime();
        this.timestamp =
          currentTime +
          dateObj.getTimezoneOffset() * 60 * 1000 +
          data.timezone * 1000;
        console.log("cityDate", this.cityDate);
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
      const localTime = new Date(this.timestamp);
      return localTime.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },

  components: {
    WeatherIcon,
  },
};
</script>
