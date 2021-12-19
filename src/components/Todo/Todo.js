/**
 * We will mimic working with server that returns an array
 */

import { useEffect, useState } from "react"

/**
 * @returns {Promise}
 async function() {
     return 10;
 }
 */

export function TodoList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        // initialization from server can be here

        (async function() {

            const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
            const tasksFromServer = await response.json()
            setTasks(tasksFromServer);

        })()
        

    }, [])

    return (
        <ul>
            {
                tasks.map((singleTask) => {
                    return (
                        <li key={singleTask.id}>
                            <h1>
                                { singleTask.title }
                            </h1>
                            <p>
                                { singleTask.description }
                            </p>
                        </li>
                    )
                })
            }    
        </ul>
    )
}
