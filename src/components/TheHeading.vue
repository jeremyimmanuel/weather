<template>
  <nav
    class="font-sans text-xl pl-4 h-16 bg-indigo-300 flex flex-row justify-start items-center w-full space-x-4"
  >
    <j-button @click="print">Home</j-button>
    <j-button>About</j-button>
  </nav>
</template>

<script>
export default {
  name: "TheHeading",

  methods: {
    print() {
      console.log("hello!");
    },
  },
};
</script>

<style lang="scss" scoped>
// style
</style>
