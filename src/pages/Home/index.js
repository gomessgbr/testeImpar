import React, { useEffect, useState } from "react";

import axios from "axios";

import { Container } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";

import Cards from "../../components/Cards";
import TopBar from "../../components/TopBar";
import SearchTextField from "../../components/SearchTextField";

export default function Home() {
  const [dataPokemons, setDataPokemons] = useState([]);

  async function fetchPokemons() {
    let response;
    try {
      response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
      response ? setDataPokemons(response.data.results) : console.log("Error");
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
      <Box
        sx={{
          display: "flex",
          height: 200,
          justifyContent: "center",
          backgroundColor: "primary.dark",
          alignItems: "center",
        }}
      >
        <SearchTextField placeholder="Digite aqui sua busca..." />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <h2>Resultado de Busca</h2>
        <Button>NovoCard</Button>
      </Box>
      <Container maxWidth="lg">
        <Grid container>
          {dataPokemons.map((item, index) => (
            <Grid item xs={3} key={index}>
              <Cards />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
