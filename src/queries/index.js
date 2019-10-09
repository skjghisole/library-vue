import gql from 'graphql-tag'

const getBooksQuery = gql`
	query {
		books {
			name
			genre
			id
		}
	}
`

const getAuthorsQuery = gql`
	query {
		authors {
			name
			age
			id
		}
	}
`

const addBookQuery = gql`
	mutation ($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			name
			genre
			author {
				name
			}
		}
	}
`

const addAuthorQuery = gql`
	mutation ($name: String!, $age: Int) {
		addAuthor(name: $name, age: $age) {
			name
			age
		}
	} 
` 

export {
	getBooksQuery,
	getAuthorsQuery,
	addAuthorQuery,
	addBookQuery
}