
import AddTodo from './components/AddTodo';
import './App.css';
import useSWR from "swr";
import {List, Checkbox, Paper} from "@mantine/core";

export const ENDPOINT = "http://localhost:4000"

const fetcher = (url) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json())

function App() {

  const {data, mutate} = useSWR("api/todos", fetcher)

  async function markDone(id) {
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`, {
      method: "PATCH"
    }).then((r) => r.json())

    mutate(updated)
  }



  return (


    <div className="App">
      <div>
        {data   ? <h1>Your ToDo List Goes here :</h1> : <h1>Click below to start a list 👇</h1>}
      </div>{console.log(data)}
    <List spacing="md" center left withPadding >
      

        {
        data?.map((todo) => 
        <><Paper className="item-container" shadow="md" radius="xs" withBorder p="xl" key = {`todo_paper_${todo.id}`}> 
          <List.Item icon = {<Checkbox onChange ={()=>markDone(todo.id)}/>} size="md" key = {`todo_listitem_${todo.id}`}>
            {todo.done ? <s>{todo.title}</s> : todo.title}
          </List.Item>
        </Paper></>)
        }
        

       
     
    </List>
      <AddTodo mutate = {mutate}/>
    </div>
  );
}

export default App;
