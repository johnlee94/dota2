import React from 'react';

const Joke = ({setup, punchline}) => {
    // if (!setup || !punchline) {
    //     return (
    //         <div>
    //         <div style={{fontWeight: "bold"}}>Missing Question!</div>
    //         <div>I'm so funny!</div>
    //     </div>
    //     )
    // }
        
    return(
        <div>
            <div style={{fontWeight: "bold"}}>{setup}</div>
            <div>{punchline}</div>
        </div>
    )
}
export default Joke;