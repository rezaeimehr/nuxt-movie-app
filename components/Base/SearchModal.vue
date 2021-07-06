<template>
  <div>
    <!-- Backdrop -->
    <BaseBackdrop :open="true" />

    <div v-on-clickaway="toggleSearchModal" class="flex justify-center">
      <div
        class="
          top-5
          sm:top-20
          fixed
          z-10
          bg-white
          w-11/12
          sm:w-9/12
          lg:w-8/12
          max-w-3xl
          flex flex-col
          text-gray-800
          px-6
          py-4
          rounded-lg
        "
      >
        <header class="flex items-center pb-1 border-b-2">
          <form
            class="flex items-center flex-1"
            action=""
            role="search"
            novalidate=""
          >
            <svg width="26" height="26" viewBox="0 0 20 20">
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>

            <input
              v-model="query"
              @keydown.esc="toggleSearchModal"
              ref="searchModal"
              class="
                text-gray-900
                bg-transparent
                appearance-none
                border-none
                mx-4
                w-full
                h-12
                outline-none
              "
              v-debounce:900ms="fetchMovies"
              aria-autocomplete="list"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              placeholder="Search docs"
              maxlength="64"
              type="text"
            />
          </form>
          <button @click="toggleSearchModal" class="">Cancel</button>
        </header>

        <div class="flex flex-col py-4">
          <div v-if="movies.length">
            <ul>
              <li
                v-for="movie in movies"
                :key="movie.id"
                class="
                  border-b border-gray-200
                  last:border-0
                  hover:bg-gray-600
                  hover:text-white
                  rounded
                  transition
                  ease-in-out
                  duration-150
                "
              >
                <div
                  @click.prevent="goTo(movie.id)"
                  class="flex sm:px-4 py-4 cursor-pointer"
                >
                  <div class="w-14 sm:w-20 bg-gray-100">
                    <BaseImage
                      :filePath="movie.poster_path"
                      :size="`w92`"
                      :alt="movie.original_title"
                    />
                  </div>
                  <div class="flex-1 flex flex-col ml-3 sm:ml-5">
                    <span class="text-base sm:text-lg font-semibold">
                      {{ movie.original_title }}
                    </span>
                    <p
                      class="
                        h-12
                        sm:h-14
                        overflow-hidden
                        ...
                        text-xs
                        sm:text-sm
                      "
                    >
                      {{ movie.overview }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <template v-else>
            <p v-if="query && loading" class="flex justify-center">
              <moon-loader
                :loading="true"
                color="#111827"
                size="30px"
              ></moon-loader>
            </p>
            <p v-if="query && !loading">
              No results for <b>"{{ query }}"</b>
            </p>

            <p v-if="!query && !loading">No recent searches</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],

  mounted() {
    this.$refs.searchModal.focus()
  },

  data() {
    return {
      query: '',
      movies: [],
      loading: false,
    }
  },

  watch: {
    query(newValue, oldValue) {
      this.loading = newValue !== ''

      this.movies = []
    },
  },

  methods: {
    toggleSearchModal() {
      this.$emit('toggleSearchModal')
    },

    async fetchMovies() {
      if (!this.query) return
      const { results } = await this.$nuxt.context.$api.$get(
        `/search/movie?query=${this.query}`
      )
      this.loading = false
      this.movies = results.slice(0, 3)
    },

    goTo(movieId) {
      this.toggleSearchModal()
      this.$router.push(`/movies/${movieId}`)
    },
  },
}
</script>