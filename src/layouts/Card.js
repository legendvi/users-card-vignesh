import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import updateUser from "../helpers-dispatch/updateUser";
export default function BasicCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275, borderRadius: 25 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="200"
          style={{ objectFit: "contain" }}
          image={props.picture}
          alt={props.name}
        />
        <Typography textAlign="center" variant="h5" component="div">
          {props.name}
        </Typography>

        <Typography textAlign="center" variant="body2">
          {props.email}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={updateUser.bind(
            this,
            props.item,
            dispatch,
            navigate,
            props.index
          )}
        >
          <span className="material-icons">
            info
            <Box sx={{ mr: 2 }} />{" "}
          </span>
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}
