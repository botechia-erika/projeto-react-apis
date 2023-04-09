import React from 'react'
import { Link } from 'react-router-dom'
import {Box, Heading, Text, Button, Container, ButtonGroup, GridItem} from '@chakra-ui/react'
import styled from 'styled-components'



export function Search() {
  return (
    <Container>
  <Grid bg="whitesmoke" w={'160px'} gridCols={'1fr 1fr 1fr'} m={'40px auto'}
  m={100vh auto'}>
    BUSCA FILTRADA!
    </Grid>
    <GridItem>Nome da lojinha</p>
      </GridItem>
      
      <GridItem><form action="">
            <input type="url" id="link-foto" name="link-foto">
            <br>
     
            <label for="descricao">Descrição do produto: </label>
            <!-- Adicione o id apropriado para o input abaixo -->
            <input type="text" id="" name="descrição">
            <br>
            <label for="preco">Preço (em R$): </label>
            <!-- Adicione o id apropriado e o type para receber números abaixo -->
            <input type="" id="" name="preço">
            <br>
            <!-- Preencha as propriedades necessárias para os elementos abaixo -->
            <label>Quantidade disponível: </label>
            <input>

            <br>
            <!-- Adicione ao type do botão abaixo o valor para que ele submeta o formulário -->
            <button type="">Adicionar</button>

    </form></GridItem>
  <GridItem>
  <Link to='/pokemons/0'>
  BuscarPokemons
</Link>
</GridItem>
<GridItem>
<Button to='/search/'>
  Enviar Busca
</Button>
</Box>
</GridItem>
</Grid>
</Container>
  )
}
