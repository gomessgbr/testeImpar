import React, { useEffect, useState } from "react";

import axios from "axios";

import { Container } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";

import fundobusca from "../../assets/fundo-busca.png";

import Cards from "../../components/Cards";
import TopBar from "../../components/TopBar";
import SearchTextField from "../../components/SearchTextField";
import PaginationComponent from "../../components/Pagination";
import AlertModal from "../../components/AlertModal";

export default function Home() {
  const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=52";
  const [dataPokemons, setDataPokemons] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [noWorkButtons, setNoWorkButtons] = useState(false);

  async function fetchPokemons(url) {
    await axios
      .get(url)
      .then((res) => {
        axios
          .all(res.data.results.map(({ url }) => axios.get(url)))
          .then((res) => setDataPokemons(res));
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
      })

      .catch((e) => console.log("Erro!", e));
  }

  const searchPokemons = (inputData) => {
    if (!inputData) fetchPokemons(URL);
    let filtredPokemons = [];
    const lowerCaseData = inputData.toLowerCase().trim();
    dataPokemons.filter((pokemon) => {
      return pokemon.data.name.includes(lowerCaseData)
        ? filtredPokemons.push(pokemon)
        : null;
    });

    setDataPokemons(filtredPokemons);
  };
  const handleNext = () => {
    fetchPokemons(nextPage);
  };
  const handlePrevious = () => {
    fetchPokemons(prevPage);
  };

  const handleClick = () => {
    setNoWorkButtons(!noWorkButtons);
  };

  useEffect(() => {
    fetchPokemons(URL);
  }, [setDataPokemons]);
  return (
    <>
      <TopBar />

      <div
        style={{
          display: "flex",
          height: 200,
          justifyContent: "center",
          backgroundImage: `url(${fundobusca})`,
          alignItems: "center",
        }}
      >
        <SearchTextField
          placeholder="Digite aqui sua busca..."
          searchPokemons={searchPokemons}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <h2 style={{ color: "purple" }}>Resultado de Busca</h2>
        <Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#E76316" }}
            onClick={handleClick}
          >
            Novo Card
          </Button>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {dataPokemons.map((pokemon, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Cards
                namePokemons={pokemon.data.name}
                image={
                  pokemon.data.sprites.other["official-artwork"].front_default
                }
                onClickDeleteCard={handleClick}
                onClickEditCard={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <PaginationComponent
        onClickNext={handleNext}
        onClickPrevious={handlePrevious}
      />

      {noWorkButtons && (
        <>
          <AlertModal showModal={noWorkButtons} handleClose={handleClick} />
        </>
      )}
    </>
  );
}
