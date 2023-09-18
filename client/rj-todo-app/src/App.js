
import AddTodo from './components/AddTodo';
import './App.css';
import useSWR from "swr";
import {List, Checkbox} from "@mantine/core";

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
    <List spacing="md" center left withPadding>
      {
        data?.map((todo) => <List.Item icon = {<Checkbox onChange ={()=>markDone(todo.id)}/>} size="md" key = {`todo_${todo.id}`}>
          {todo.done ? <s>{todo.title}</s> : todo.title}
        </List.Item>)
      }
    </List>
      <AddTodo mutate = {mutate}/>
    </div>
  );
}

export default App;
