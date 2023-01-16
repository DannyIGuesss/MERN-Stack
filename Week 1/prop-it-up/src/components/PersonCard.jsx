import React from 'react';

const PersonCard = (Props) => {
    return (
        <div>
            <h1>{Props.firstName}, {Props.lastName}</h1>
            <h3>Age: {Props.age}</h3>
            <h3>Hair Color: {Props.hair}</h3>
        </div>
    )
}

export default PersonCard;