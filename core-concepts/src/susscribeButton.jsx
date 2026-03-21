import { ActionButton } from "./actionButton"

export const SuscribeButton = ()=>{
    const handleSuscribe = ()=>{
        alert("Thanks for suscribng")
        
    }
    return(
        <ActionButton text="suscribe" onClick={handleSuscribe} />)

}