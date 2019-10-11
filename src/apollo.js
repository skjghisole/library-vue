import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
	uri: 'http://localhost:3030/graphql'
})

const wsLink = new WebSocketLink({
	uri: 'ws://localhost:3030/graphql',
	options: {
		reconnect: true
	}
})

const link = split(({ query }) => {
	const def = getMainDefinition(query)
	return def.kind === 'OperationDefinition' && def.operation == 'subscriptions'
}, wsLink, httpLink)


const apolloClient = new ApolloClient({
	link,
	cache: new InMemoryCache(),
	connectToDevTools: true,
})


Vue.use(VueApollo)

export default apolloClient