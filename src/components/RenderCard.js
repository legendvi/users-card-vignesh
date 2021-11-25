import BasicCard from "../layouts/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
export default function RenderCard(props) {
  const state = useSelector((state) => state.usersDetails.userDetailsArray);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#1976d2" }}>
      <Container>
        <Grid container spacing={2}>
          {state.map((item, index) => {
            return (
              <Grid item md={6} sm={12} lg={3} key={index}>
                <BasicCard
                  name={`${item.name.title} ${item.name.first} ${item.name.last} `}
                  email={item.email}
                  picture={item.picture.large}
                  item={item}
                  index={index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
