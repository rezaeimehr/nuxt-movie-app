<template>
  <div>
    <NuxtLink
      :to="`/actors/${person.id}`"
      class="flex"
      style="min-height: 138px"
    >
      <BaseImage
        :filePath="person.profile_path"
        :size="this.isCast ? `w300` : `w235_and_h235_face`"
        :alt="person.name"
        class="
          w-full
          hover:opacity-75
          transition
          ease-in-out
          duration-150
          bg-gray-800
        "
      />
    </NuxtLink>

    <NuxtLink :to="`/actors/${person.id}`" class="hover:text-gray-300">
      <span class="text-lg mt-2 block"> {{ person.name }} </span>
    </NuxtLink>
    <span class="text-sm truncate text-gray-400 block">
      {{ personInfo }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
    isCast: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    personInfo() {
      if (this.isCast) return this.person.character

      const knownFor = this.person.known_for.map((movie) => {
        return movie.title ? movie.title : movie.name
      })
      return knownFor.join(', ')
    },
  },
}
</script>