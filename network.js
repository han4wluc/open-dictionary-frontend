
const GRAPHSQL_API = `http://106.14.4.255:3000/graphiql`;

import axios from 'axios';

export const login = async function(variables){
  const query = `
`
  const result = await axios.post(GRAPHSQL_API, {
    query: query,
    variables,
  });

  // check if user was found
}


export const signup = function(variables) {
  try {
    const query = `
  mutation($name: String!, $email: String!) {
    createUser(input: {
      user: {
        name: $name,
        email: $email
      }
    }) {
      clientMutationId
    }
  }
  `
    await axios.post(GRAPHSQL_API, {
      query: query,
      variables,
    });
  } catch (error) {
    throw error;
  }

}


const searchWords = function() {

}




