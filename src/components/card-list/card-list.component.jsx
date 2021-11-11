import React from 'react';
// import component
import { Card } from '../card/card.component';
// import specific style
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
    {props.monsters.map(monster => ( 
        <Card key={monster.id} monster={monster} />
      ))}
    
    </div>
);