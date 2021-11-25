import { Box, Container } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./SingleUser.module.css";
export default function SingleUser(props) {
  return (
    <>
      <Box>
        <Container>
          <Box
            sx={{
              marginTop: "1rem",
              bgcolor: "#1976d2",
              borderRadius: "4rem",
              wdith: "20rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "#00695c",
                width: "20rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10%",
              }}
            >
              <img
                className={classes.image}
                src={props.picture}
                alt={props.name}
              />
              <h5>Name</h5>
              <p className="fs-5 text-light">{props.name}</p>
              <h5>Age</h5>
              <p className="fs-5 text-light">{props.age}</p>
              <h5>DOB</h5>
              <p className="fs-5 text-light">{props.dob}</p>
              <h5>E-mail</h5>
              <p className="fs-5 text-light">{props.email}</p>
              <h5>Address</h5>
              <p className="fs-5 text-light">{props.street}</p>
              <p className="fs-5 text-light">{`${props.city}, ${props.state} - ${props.postcode}`}</p>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
