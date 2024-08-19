import React from 'react';

const Joke = ({setup, punchline}) => {
    console.log(setup)
    console.log(punchline)

    if (!setup || !punchline) {
        return (
            <div>
            <div style={{fontWeight: "bold"}}>Missing Question!</div>
            <div>I'm so funny!</div>
        </div>
        )
    }
        
    return(
        <div>
            <div style={{fontWeight: "bold"}}>{setup}</div>
            <div>{punchline}</div>
        </div>
    )
}

// Joke.defaultProps = {
//     setup: "hi",
//     punchline: "there"
// }

export default Joke;