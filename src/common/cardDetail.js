import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function () {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>Shoes</span>
            <span style={{ float: "right" }}> ₹ 1000</span>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Buy
          </Button>
          <CreateRoundedIcon />
          <DeleteRoundedIcon />
        </CardActions>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>Shoes</span>
            <span style={{ float: "right" }}> ₹ 1000</span>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Buy
          </Button>
          <CreateRoundedIcon />
          <DeleteRoundedIcon />
        </CardActions>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>Shoes</span>
            <span style={{ float: "right" }}> ₹ 1000</span>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Buy
          </Button>
          <CreateRoundedIcon />
          <DeleteRoundedIcon />
        </CardActions>
      </Card>
    </>
  );
}
