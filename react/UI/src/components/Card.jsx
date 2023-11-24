import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Cards({ film }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={film.Poster} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {film.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {film.Type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {film.Year}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Cards;
