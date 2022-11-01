import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchTextField({ placeholder, searchPokemons }) {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 800,
        height: 60,
      }}
      onChange={(event) => searchPokemons(event.target.value)}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeholder} />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
