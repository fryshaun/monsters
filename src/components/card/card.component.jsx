import React from 'react';
//import styles
import './card.styles.css';
// bottom level component, so no need to import anything else

export const Card = (props) => (
<div className='card-container'>
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`} />
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
</div>
);