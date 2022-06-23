import React from 'react';

const pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = (props) => {
    let imgSrc = `${pokeImg}${props.id}.png`

    return (
        <div>
            <h4>{props.name}</h4>
            <img src={imgSrc} alt=""></img>
            <h4>{props.type}</h4>
        </div>
    )
}

export default Pokecard
