const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWY1NjBmNjRiNjQ2ZjMzMTUzZWFkZTZmNjAzNWM5ZCIsInN1YiI6IjYwYjc5YjU3MThiNzUxMDAyOTZjMWQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iNVn6Yz8y2nDMajlnxuBDeRhu6mRvnc_7b6TCqhGHSg'
const BASE_URL = 'https://api.themoviedb.org/3'

export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
            Authorization: `bearer ${TOKEN}`
        }
      }
    })
  
    // Set baseURL to something different
    api.setBaseURL(BASE_URL)
  
    // Inject to context as $api
    inject('api', api)
}