import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards({ namePokemons }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {namePokemons}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Excluir</Button>
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>
  );
}
