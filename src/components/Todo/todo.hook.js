import { useEffect, useState } from "react";


export function useTodo() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        // initialization from server can be here

        (async function() {

            const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
            const tasksFromServer = await response.json()
            setTasks(tasksFromServer);

        })()
        

    }, []);

    return tasks;
}