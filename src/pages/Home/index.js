import React, { useEffect, useState } from "react";

import axios from "axios";

import { Container } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";

import Cards from "../../components/Cards";
import TopBar from "../../components/TopBar";
import SearchTextField from "../../components/SearchTextField";

export default function Home() {
  async function fetchPokemons() {
    let response;
    try {
      response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    } catch (e) {
      console.log("Algo deu errado na chamada da API", e);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <>
      <TopBar />
      <Box>
        <SearchTextField placeholder="Digite aqui sua busca" />
      </Box>
      <Box>
        <h2>Resultado de Busca</h2>
        <Button>NovoCard</Button>
      </Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
