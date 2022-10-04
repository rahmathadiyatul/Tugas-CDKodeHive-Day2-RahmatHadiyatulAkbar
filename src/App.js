import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Box, ListItemButton, ListItemText, List, ListItem, TextField, FormControlLabel } from '@mui/material';

const fruits = ["orange", "apple"]
function App() {
  const [fruit, setFruit] = useState(fruits)
  const [input2, setInput2] = useState("")
  const addFruit = (input) => {
    setFruit(current => [...current, input]);
  };

  return (

    <div className="App">
      <h1>Simple List in React</h1>
      <h2>Adding a dynamically generated list item</h2>
      <Box sx={{
        margin: "auto",
        width: 800,
        alignItem: 'center',
        alignText: "center",
        fontColor: '#397eb3',
        backgroundColor: '#ddecf8',
        '&:hover': {
          backgroundColor: '#bbecf8',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        {fruit.map((item, index) =>
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText key={index} sx={{ textAlign: 'center', fontColor: "primary" }}>
                  {item}{index + 1}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </Box>
      <Box sx={{ marginRight: 55, fontWeight: 'bold' }}>
        <label htmlFor="input">Fruit Name</label>
        <TextField sx={{
          '&:hover': {
            border: 'solid',
            borderColor: '#bbecf8',
            opacity: [0.9, 0.8, 0.7],
          }
        }} margin="auto" onChange={(item) => {
          setInput2(item.target.value)
        }} type="text" key="input" id="input" placeholder='e.x.lemmon'></TextField>
        <Button sx={{ paddingY: 2 }} variant="contained" onClick={() => {
          let input = input2
          addFruit(input)
          document.getElementById('input').value = ''
        }}>Add Fruit</Button>
      </Box>
    </div >
  );
}

export default App;
