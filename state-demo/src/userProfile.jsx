import { useState } from "react"


export const UserProfile = ()=>{
const [user, setUser] = useState({
    name: "greatness adeola",
    age: 30,
    email: "batman@gmail.com"
})

const updateName =()=>{
    setUser({
        ...user,
        name: "oluwole"
    })
}

const increaseAge = ()=>{
    setUser({
        ...user,
        age: user.age + 1
    })
}

    return <div>
        <h2>Name: {user.name}</h2>
        <p>Age:{user.age}</p>
        <p>Email: {user.email}</p>
        <button onClick={updateName}>update the name</button>
        <button onClick={increaseAge}>increase the age</button>
    </div>
}