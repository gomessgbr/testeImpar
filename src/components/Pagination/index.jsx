import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PaginationComponent({ onClickNext, onClickPrevious }) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      padding={4}
    >
      <Button
        size="medium"
        startIcon={<ArrowBackIcon sx={{ color: "#E76316" }} />}
        variant="contained"
        sx={{ backgroundColor: "#5F1478" }}
        onClick={onClickPrevious}
      >
        Anterior
      </Button>
      <Button
        size="medium"
        endIcon={<ArrowForwardIcon sx={{ color: "#E76316" }} />}
        variant="contained"
        sx={{ backgroundColor: "#5F1478" }}
        onClick={onClickNext}
      >
        Proximo
      </Button>
      {/* <Pagination count={10} color="secondary" onChange={onChange} /> */}
    </Stack>
  );
}
