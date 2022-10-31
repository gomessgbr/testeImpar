import React, { useEffect, useState } from "react";

import axios from "axios";

import { Container } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";

import Cards from "../../components/Cards";
import TopBar from "../../components/TopBar";
import SearchTextField from "../../components/SearchTextField";

export default function Home() {
  const [dataPokemons, setDataPokemons] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  async function fetchPokemons() {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50")
      .then((res) => {
        setDataPokemons(res.data.results);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
        fetchPokemonsImages(res.data);
      })

      .catch((e) => console.log("Erro!", e));
  }

  const searchPokemons = (inputData) => {
    if (!inputData) {
      fetchPokemons();
    }
    let filtredPokemons = [];
    const lowerCaseData = inputData.toLowerCase();
    dataPokemons.filter((pokemon) => {
      return pokemon.name.includes(lowerCaseData)
        ? filtredPokemons.push(pokemon)
        : null;
    });

    setDataPokemons(filtredPokemons);
  };

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
        <SearchTextField
          placeholder="Digite aqui sua busca..."
          searchPokemons={searchPokemons}
        />
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
        <Grid container spacing={3}>
          {dataPokemons.map((pokemon, index) => (
            <Grid item xs={3} key={index}>
              <Cards namePokemons={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
