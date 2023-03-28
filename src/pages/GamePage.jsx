import React from "react";
import styled from "styled-components";

const MainShop = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

 const SearchClient = styled.div`
    display: flex;
    width: 20%;
    flex-direction: column;
`

 const ResponseSection = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    `


export function GamePage(){

    return(
      <>
 <MainShop>     <h1>PokeGame</h1>     <ResponseSection>
      
         


<p>
De Bulbapedia, a enciclopédia Pokémon voltada para a comunidade.
Saltar para a navegaçãoSaltar para a pesquisa
Se você estava procurando a propriedade de um Pokémon chamado tipo no The Official Pokémon Handbook, consulte a categoria Pokémon.
</p>


<h3>Tipos</h3>
<p>Normal	Fogo
Lutando	Água
Voador	Grama
Veneno	Elétrico
Chão	Psíquico
Rocha	Gelo
Bug	Dragão
Fantasma	Escuro
Aço	Fada
???	
Tipos (japonês: タイプ Tipo) são propriedades aplicadas a Pokémon e seus movimentos, que afetam o poder dos movimentos em batalhas. A partir da Geração VI, existem 18 tipos, conforme listado à direita.

Durante a Geração I, os tipos eram ocasionalmente referidos como elementos.
</p>
</ResponseSection>
</MainShop>

</>
    )
}