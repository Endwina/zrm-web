import ReactDom from 'react-dom';
import App from './App'
import { ApolloClient } from 'apollo-boost';
import {  ApolloProvider } from 'react-apollo';
// 默认情况下，该客户端将发送查询同个域名下的
// `/graphql` 路径
const client = new ApolloClient({
    uri:'http://localhost:4000/graphql',
})



ReactDom.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
    document.getElementById('root')
)

