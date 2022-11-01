import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Typography from "@mui/material/Typography";

export default function Cards({ namePokemons, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {namePokemons}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          flex={1}
          borderTop={0.5}
          borderColor="#a0a0a0"
        >
          <Button startIcon={<DeleteOutlineOutlinedIcon />}>Excluir</Button>
          <Button startIcon={<ModeEditOutlineOutlinedIcon />}>Editar</Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
