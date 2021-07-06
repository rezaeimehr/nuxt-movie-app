<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
    <div
      v-for="(person, index) in movieCast"
      :key="index"
      class="flex flex-col"
    >
      <Person :person="person" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['people'],
  computed: {
    movieCast() {
      return this.people.cast.slice(0, 5)
    },
  },
}
</script>