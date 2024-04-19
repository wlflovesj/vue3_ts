<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  icon: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 16,
  },
  height: {
    type: Number,
    default: 16,
  },
  color: {
    type: String,
    default: "red",
  },
});
</script>
<template>
  <svg :style="`width: ${width}px; height: ${height}px`">
    <use :href="prefix + icon" :fill="color"></use>
  </svg>
</template>
<style scoped></style>
