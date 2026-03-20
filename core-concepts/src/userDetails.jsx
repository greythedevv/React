export const UserDetails = ({name ="grey", isOnline}) =>{
    
    return(
        <div>
            <h3>{name}</h3>
            <span>{isOnline? "🟢 Online":offline}</span>
            <p>{isOnline? "Avalable for chat": "Not available"}</p>
            {isOnline?<button>Spend Message</button>:<small>check back later</small>}
        </div>


    )


//     if(isOnline){
//         return(
//             <div>
//                 <h3>{name}</h3>
//                 <span>🟢 Online</span>
//                 <p>Avalable for chat</p>
//                 <button>Spend Message</button>
//             </div>
//         )
//     }


// return(
//     <div>
//         <h3>{name}</h3>
//         <span>offline</span>
//         <p>Not available</p>
//         <small>check back later</small>
//     </div>
// )
}