<template>
  <div></div>
</template>

<script>
export default {
  name: "WeatherIcon",

  props: {
    condition: {
      type: String,
      required: true,
    },
  },

  computed: {
    /** @returns {string} */
    icon() {
      switch (this.condition) {
        case "clear sky":
          return "sun";
        case "few clouds":
          return "cloud-sun";
        case "scattered clouds":
          return "cloud";
        case "broken clouds":
          return "cloud-meatball";
        case "shower rain":
          return "cloud-rain";
        case "rain":
          return "cloud-showers-heavy";
        case "thunderstorm":
          return "bolt";
        case "snow":
          return "snowflake";
        case "mist":
          return "smog";
        default:
          return "";
      }
    },
  }
};
</script>

<style lang="scss" scoped></style>
