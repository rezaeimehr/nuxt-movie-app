<template>
  <h3 class="text-xl font-semibold racking-wider text-yellow-500 py-6 mb-2">
    {{ title }}
  </h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
}
</script>