import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemText } from "@mui/material";
import Container from "@mui/material/Container";
import InputBox from "./components/InputBox";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    listItems: [
      { title: "thing 1", uid: 1 },
      { title: "thing 2", uid: 2 },
      { title: "thing 3", uid: 3 },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${process.env.REACT_APP_API_ENDPOINT}/items`);
      setData((cData) => {
        const clone = structuredClone(cData);
        clone.listItems = result.data.items;
        return clone;
      });
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            To Do List
          </Typography>
        </Grid>
      </Grid>
      <InputBox setData={setData}></InputBox>
      <List>
        {data.listItems.map((listItem) => (
          <ListItem key={listItem.uid}>
            <ListItemText primary={listItem.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
