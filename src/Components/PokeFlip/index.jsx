import styled from "styled-components"
import { Link } from "react-router-dom"

import React from 'React'

export const Pokeflip = () => {
  return (


<>
<StyledCard className="card-flip">
               <div className="card front">
            <img src="https://live.staticflickr.com/65535/51937488067_0f7029922f_o.png" alt="construccion" className="card-img-top img-fluid"/>
            <div className="card-block">
                <h4 className="card-title">Comuna 0
              <h1>{pokeData.name}</h1>
                </h4>
                <ul className="card-text">
                   <li> {pokeData.name}</li>
                </ul>
            </div>
        </div>


              <div className="card back">
            <div className="card-header">
                C.A.B.A.
            </div>
            <div className="card-block">
                <h4 className="card-title">Lo MEJOR de la <br/> COMUNA 0
                    <p>
                    {pokeData.data.id}
                    </p>
                </h4>
                <p className="card-text">
                    {dataPokemon.name}
                </p>
                <button>
                <Link path="/pokemons/{dataPokemon.id}" />
                </button>
            </div>
        </div>
    </StyledCard>
    </>


)
}