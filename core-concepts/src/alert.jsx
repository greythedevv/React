import "./alert.css";

export const Alert = ({children, type="sucess"})=>{

    return(
        <div className={`alert ${type}`}>{children}</div>
    )
}