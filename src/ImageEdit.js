import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import store from "./reducers/reducers";
import { editImages } from "./actions/imageAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    marginTop: 20,
  },
});
export default function ImageEdit({ image, history }) {
  const classes = useStyles();
  const [image_edit, setImageEdit] = useState({
    id: image.id,
    title: image.title,
    description: image.description,
    imageUrl: image.imageUrl,
    author: image.author,
  });

  function handleSubmit(e) {
    e.preventDefault();
    store.dispatch(editImages(image_edit));
    history.push("/");
  }
  function handleChange(e) {
    let name = e.target.name;
    let newValue = e.target.value;
    setImageEdit({ ...image_edit, [name]: newValue });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>Hello WQorld</div>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={image_edit.imageUrl}
            title="Contemplative Reptile"
          />
        </Card>
        <TextField
          id="Title"
          label="Title"
          fullWidth
          name="title"
          value={image_edit.title}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="Description"
          label="Description"
          fullWidth
          name="description"
          value={image_edit.description}
          onChange={handleChange}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="Submit"
        >
          Edit
        </Button>
      </form>
    </React.Fragment>
  );
}
