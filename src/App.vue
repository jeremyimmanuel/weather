<template>
  <div>
    <the-body class="flex justify-center items-center" />
  </div>
</template>

<script>
import TheBody from "@/components/TheBody.vue";

export default {
  name: "App",

  components: {
    TheBody,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
