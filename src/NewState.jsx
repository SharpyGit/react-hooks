import React, {useState} from 'react'

const NewState = () => {
    // git push -u origin mainhook
    const[counter, setCounter] = useState(0)
    return (
        <>        
        <p>This is the new state function, value of counter in state is {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>New State Increase count</button>
        </>
    )

}

export default NewState