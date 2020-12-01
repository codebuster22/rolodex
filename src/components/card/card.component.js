import React from 'react';
import './card.styles.css'

const Card = ({monster}) => {


    return (
        <>
            <div className={'card-container'}>
                <img
                    alt={`${monster.name}'s profile`}
                    src={`https://robohash.org/${monster.id}?set=set5&size=180x180`} />
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
            </div>
        </>
    )

}

export default Card;