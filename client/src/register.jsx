import { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto">

                <input 
                value={username} onChange={ev =>setUsername(ev.target.value)}
                type="text" placeholder="username" 
                // styling
                className="block w-full p-2 mb-2"/>

                <input 
                value={password} onChange={ev =>setPassword(ev.target.value)} 
                type="text" placeholder="password" 
                // styling
                className="block w-full p-2 mb-2"/>

                <button 
                // styling
                className="text-white bg-blue-500 block w-full rounded-lg p-2">
                    Register
                </button>
            </form>
        </div>
    )
}