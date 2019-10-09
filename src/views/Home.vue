<template>
  <div class="container">
    <div class="welcome-message">
      <h1>
        Welcome to my Vue Library
      </h1>
    </div>
    <div class="add">
      <AddAuthor />
      <AddBook :authors="authors" />
    </div>
  </div>
</template>

<script>
  import AddAuthor from '../components/AddAuthor'
  import AddBook from '../components/AddBook'
  import { getBooksQuery, getAuthorsQuery } from '../queries'
  export default {
    name: 'App',
    components: {
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
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .welcome-message {
    padding: 50px;
    font-size: 3em;
  }
  .add {
  }
</style>