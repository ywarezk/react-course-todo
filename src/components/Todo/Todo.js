/**
 * We will mimic working with server that returns an array
 */

import { useEffect, useState } from "react"
import { useTodo } from "./todo.hook";

/**
 * @returns {Promise}
 async function() {
     return 10;
 }
 */

export default function TodoList() {
    const tasks = useTodo();
    

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
