export const UserDetails = ({name ="grey", isOnline, isPremium, isNew}) =>{
    
    return(
        <div>
            
            <h3>{name}{isPremium && <span>⭐</span>}
             {isPremium && <span>🍾</span>}</h3>
            
            <span>{isOnline? "🟢 Online":"offline"}</span>
            <p>{isOnline? "Avalable for chat": "Not available"}</p>
            {isOnline?<button>Spend Message</button>:<small>check back later</small>}
        </div>


    )
}