import {gql} from 'apollo-boost'

const getUserQuery = gql`
    {
        users{
            id
            account
            password
        }
    }
`

const createUserMutation = gql`
    mutation ($account:String!,$password:String!){
        createUser(account:$account,password:$password){
            id
            account
            password
        }
    }
`

export {getUserQuery,createUserMutation};