import { useState } from "react"
import {useForm} from "@mantine/form"
import {Modal, Button, Group, TextInput, Textarea} from "@mantine/core"
import { ENDPOINT } from "../App"




function AddTodo({mutate}){
    const [open, setOpen] = useState(false)

    //form template
    const form = useForm({
        initialValues: {
            title: '',
            content: ''
        }
    })

    async function createTodo(values) {

        const updated = await fetch(`${ENDPOINT}/api/todos`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        }).then((r) => r.json())
        mutate(updated)
        form.reset()
        setOpen(false)

    }

    return <>

    <Modal opened = {open} onClose={() => setOpen(false)}  title ="Create todo" >

       <form onSubmit={form.onSubmit(createTodo)}>
        <TextInput required label ="Todo" placeholder ="Title" {...form.getInputProps("title")}/>

        <Textarea required label ="Content" placeholder ="Describe your task.." {...form.getInputProps("content")} />
        <Button type ="submit">Add this to your list</Button>
       </form>

    </Modal>

    <Group position ="center">
        <Button  onClick = {() => setOpen(true)} >Create Todo</Button>
    </Group>

    </>
}

export default AddTodo