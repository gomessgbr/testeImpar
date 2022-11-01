import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function PaginationComponent({ onClickNext, onClickPrevious }) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      padding={4}
    >
      <Button size="medium" variant="contained" onClick={onClickPrevious}>
        Anterior 
      </Button>
      <Button size="medium" variant="contained" onClick={onClickNext}>
        Proximo
      </Button>
      {/* <Pagination count={10} color="secondary" onChange={onChange} /> */}
    </Stack>
  );
}
