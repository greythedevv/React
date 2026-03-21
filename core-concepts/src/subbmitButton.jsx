import { ActionButton } from "./actionButton"

export const SubbmitButton = ()=>{
    const handleSubbmit = ()=>{
        alert("submiting the orm")
        
    }
    return(
        <ActionButton text="subbmit" onClick={handleSubbmit} />)

}