    import React from 'react';
    import {useState} from 'react';

const PersonCard = (Props) => {

    const [state, setState] = useState(Props.age)

    const incrementAge = () => {
        setState(state + 1)
    }
    return (
        <div>
            <h1>{Props.firstName}, {Props.lastName}</h1>
            <h3>Age: {state}</h3>
            <h3>Hair Color: {Props.hair}</h3>
            <button onClick={incrementAge}>Birthday Button for {Props.firstName}</button>
        </div>
    )
}

export default PersonCard;