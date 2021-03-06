import Vue from 'vue'
import App from './App.vue'
// import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import router from './router'
import apolloClient from './apollo'
Vue.config.productionTip = false


// const apolloClient = new ApolloClient({
//   // You should use an absolute URL here
//   uri: 'https://skjghisole-library-gql-server.herokuapp.com/graphql'
// })

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })

// Vue.use(VueApollo)

new Vue({
  router,
  apolloProvider: new VueApollo({
		defaultClient: apolloClient
  }),
  render: h => h(App)
}).$mount('#app')

