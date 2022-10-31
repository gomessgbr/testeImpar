import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent({ onClick }) {
  return <Pagination count={10} color="secondary" onClick={onClick} />;
}
