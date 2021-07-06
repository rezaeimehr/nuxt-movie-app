<template>
  <div class="flex flex-col px-5 py-8">
    <div class="container mx-auto">
      <BaseHeading title="POPULAR ACTORS" />

      <div
        class="
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-8
        "
      >
        <Person
          v-for="(person, index) in popularActors.results"
          :person="person"
          :isCast="false"
          :key="index"
        />
      </div>
      <client-only>
        <infinite-loading
          class="mt-12"
          @infinite="loadMorePerson"
        ></infinite-loading>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const popularActors = await $api.$get(`/person/popular`)
    return { popularActors }
  },
  data() {
    return {
      page: 1,
    }
  },
  methods: {
    async loadMorePerson($state) {
      this.page++
      const { results } = await this.$api.$get(
        `https://api.themoviedb.org/3/person/popular?page=${this.page}`
      )
      this.popularActors.results.push(...results)
      $state.loaded()
    },
  },
}
</script>