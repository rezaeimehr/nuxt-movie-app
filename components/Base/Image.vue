<template>
  <nuxt-img :src="imgURL" :alt="alt"></nuxt-img>
</template>

<script>
export default {
  props: {
    filePath: {
      required: true,
    },
    size: {
      type: [String, Boolean],
      default: 'w500',
    },
    org: {
      type: Boolean,
      default: false,
    },
    alt: {
      type: String,
    },
  },

  computed: {
    imgURL() {
      if (!this.filePath) {
        return `${this.$config.defaultBaseImageURL}/api/?size=102&name=${this.alt}`
      }

      const org = this.org ? 'original/' : ''
      const size = this.size ? this.size : ''
      return `${this.$config.baseImageURL}/t/p/${org}${size}${this.filePath}`
    },
  },
}
</script>