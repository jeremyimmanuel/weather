<template>
  <button
    class="hover:border-b-2 hover:border-black focus:outline-none"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "JButton",
};
</script>
