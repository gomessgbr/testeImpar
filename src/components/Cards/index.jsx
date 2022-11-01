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
import { Box } from "@mui/material";

export default function Cards({ namePokemons, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box marginBottom={1}>
        <CardMedia component="img" image={image} alt="green iguana" />
        <CardContent>
          <Typography flex={1}>{namePokemons}</Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ flex: 1 }}>
        <Stack
          borderTop={0.5}
          borderColor="#a0a0a0"
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          flex={1}
        >
          <Button
            sx={{ color: "#263238", flex: 1, margin: 1 }}
            startIcon={<DeleteOutlineOutlinedIcon color="error" />}
          >
            Excluir
          </Button>
          <Button
            sx={{ color: "#263238", flex: 1 }}
            startIcon={
              <ModeEditOutlineOutlinedIcon sx={{ color: "#E76316" }} />
            }
          >
            Editar
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
