window.onNuxtReady((context) => {
    if(context.$store.state.genres.length === 0) context.$store.dispatch('nuxtServerInit', context)
})