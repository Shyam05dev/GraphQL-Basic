import './App.css'
import { gql , useQuery } from "@apollo/client"

//define query
const query = gql`
# give any name for query
  query GetTodosWithUser{ 
    getTodos { 
    title
    id
    completed
    user {
      id
      name
      website
    }
  }
  }
`

function App() {
  const { data , error , loading} = useQuery(query); // pass created query into useQuer and extract data
  console.log(data.getTodos);
  if(loading) return <h1>Loading...</h1>
  if(error) return <p>{error}</p>
  return (
    <>
      <h1>GraphQL Basic</h1>
      <h1>Tods with User</h1>
      <ul>
      {
        data.getTodos.map((i)=><li key={i.id}>
          <p>title : {i.title}</p>
          <p>completed : {i.completed}</p>
          <p>createdBy :{i.user.name}</p>
        </li>)
      }
      </ul>
    </>
  )
}

export default App
