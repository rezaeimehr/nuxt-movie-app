<template>
  <div
    v-show="open"
    class="
      fixed
      inset-0
      z-10
      flex
      items-end
      bg-black bg-opacity-50
      sm:items-center
      sm:justify-center
    "
  ></div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
}
</script>