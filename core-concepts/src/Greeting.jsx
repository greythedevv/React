export const Greeting = ({name = "guest", message="Hello"})=>{
    return(
        <h2>{message}, {name}</h2>

    )
}