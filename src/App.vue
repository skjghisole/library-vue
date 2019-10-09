<template>
  <div>
    <Books :books="books" />
    <Authors :authors="authors" />
    <AddAuthor />
    <AddBook :authors="authors" />
  </div>
</template>

<script>
  import Books from './components/Books'
  import Authors from './components/Authors'
  import { getBooksQuery, getAuthorsQuery } from './queries'
  export default {
    name: 'App',
    components: {
      Books,
      Authors,
    },
    apollo: {
      books: getBooksQuery,
      authors: getAuthorsQuery,
    },
    data () {
      return {
        books: [],
        authors: []
      }
    }
  }
</script>

<style lang="css" scoped>
</style>