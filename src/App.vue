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
  import AddAuthor from './components/AddAuthor'
  import AddBook from './components/AddBook'
  import { getBooksQuery, getAuthorsQuery } from './queries'
  export default {
    name: 'App',
    components: {
      Books,
      Authors,
      AddAuthor,
      AddBook
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