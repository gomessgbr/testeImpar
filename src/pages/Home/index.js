import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import Cards from "../../components/Cards";
import TopBar from "../../components/TopBar";
import SearchTextField from "../../components/SearchTextField";

export default function Home() {
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
