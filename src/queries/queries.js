import { gql } from '@apollo/client'

const GET_MOVIES_QUERY = gql`
   {
      movies{
         name
         genre
         id
      }
   }
`

const GET_DIRECTORS_QUERY = gql`
   {
      directors{
         name
         id
      }
   }
`
const ADD_MOVIE_MUTATION = gql`
   mutation($name:String!, $genre:String!, $directorId: ID!){
      addMovie(name:$name, genre:$genre, directorId:$directorId){
         name
         id
      }
   }
`

const GET_MOVIE_QUERY = gql`
   query($id:ID){
      movie(id:$id){
         id
         name
         genre
         director{
            id
            name
            age
            movie{
               name
               id
            }
         }
      }
   }
`

export { GET_MOVIES_QUERY, GET_DIRECTORS_QUERY, ADD_MOVIE_MUTATION, GET_MOVIE_QUERY };